export default function Loader({ visible }) {
  return (
    <div
      id="loader"
      className="fixed inset-0 z-[100] bg-[#050505] flex items-center justify-center transition-all duration-1000"
      style={{
        opacity: visible ? 1 : 0,
        visibility: visible ? 'visible' : 'hidden',
        pointerEvents: visible ? 'all' : 'none',
      }}
    >
      <div className="relative flex items-center justify-center" style={{ width: 120, height: 120 }}>
        <div
          className="absolute inset-0 rounded-full border border-[rgba(0,210,255,0.3)]"
          style={{ animation: 'sphereRotate 3s infinite linear' }}
        />
        <div
          className="absolute rounded-full border border-[rgba(157,80,187,0.3)]"
          style={{ inset: -10, animation: 'sphereRotate 2s infinite linear reverse' }}
        />
        <div
          className="absolute rounded-full border border-[rgba(0,210,255,0.1)]"
          style={{ inset: -20, animation: 'sphereRotate 4s infinite linear' }}
        />
        <span
          className="absolute font-['Space_Grotesk'] font-black text-3xl text-white tracking-tighter"
          style={{
            animation: 'pulseGlowIcon 2s infinite ease-in-out',
          }}
        >
          AG.
        </span>
      </div>
      <style>{`
        @keyframes pulseGlowIcon {
          0%, 100% { opacity: 0.5; filter: blur(2px); }
          50% { opacity: 1; filter: blur(0px); text-shadow: 0 0 20px #00d2ff; }
        }
      `}</style>
    </div>
  )
}
