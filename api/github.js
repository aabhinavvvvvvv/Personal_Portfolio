const USERNAME = 'aabhinavvvvvvv'

async function getContributions(token) {
  const query = `query {
    user(login: "${USERNAME}") {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
            }
          }
        }
      }
    }
  }`
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })
  const json = await res.json()
  return json.data.user.contributionsCollection.contributionCalendar
}

async function getPRs(token) {
  const allPRs = []
  let page = 1
  while (true) {
    const res = await fetch(
      `https://api.github.com/search/issues?q=is:pr+author:${USERNAME}&per_page=100&page=${page}&sort=updated`,
      { headers: { Authorization: `token ${token}`, Accept: 'application/vnd.github.v3+json' } }
    )
    const data = await res.json()
    if (!data.items?.length) break
    for (const pr of data.items) {
      allPRs.push({
        title: pr.title,
        number: pr.number,
        state: pr.pull_request?.merged_at ? 'merged' : pr.state,
        url: pr.html_url,
        repo: pr.repository_url.replace('https://api.github.com/repos/', ''),
        updatedAt: pr.updated_at,
      })
    }
    if (data.items.length < 100) break
    page++
  }
  return allPRs
}

async function getStats(token) {
  const res = await fetch(`https://api.github.com/users/${USERNAME}`, {
    headers: { Authorization: `token ${token}` },
  })
  const u = await res.json()
  return { publicRepos: u.public_repos, followers: u.followers, following: u.following }
}

export default async function handler(req, res) {
  const token = process.env.GITHUB_TOKEN
  if (!token) {
    return res.status(500).json({ error: 'GITHUB_TOKEN not set' })
  }
  try {
    const [contributions, prs, stats] = await Promise.all([
      getContributions(token),
      getPRs(token),
      getStats(token),
    ])
    res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400')
    res.status(200).json({ contributions, prs, stats })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
