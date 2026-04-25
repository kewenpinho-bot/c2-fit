export default function Logo3D({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center select-none ${className}`} style={{ height: "100%" }}>
      <svg
        viewBox="0 0 230 72"
        xmlns="http://www.w3.org/2000/svg"
        style={{ height: "100%", width: "auto" }}
        aria-label="C2Fit Academia"
        role="img"
      >
        <defs>
          {/* Gold gradient — top-lit 3D face */}
          <linearGradient id="goldFace" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFE566" />
            <stop offset="45%" stopColor="#F5C500" />
            <stop offset="100%" stopColor="#A07800" />
          </linearGradient>

          {/* Extrusion side — dark gold */}
          <linearGradient id="goldExtrude" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7A5800" />
            <stop offset="100%" stopColor="#4A3500" />
          </linearGradient>

          {/* White 3D gradient for "fit" */}
          <linearGradient id="whiteFace" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="55%" stopColor="#DDDDDD" />
            <stop offset="100%" stopColor="#999999" />
          </linearGradient>

          {/* Drop shadow */}
          <filter id="dropshadow" x="-15%" y="-15%" width="140%" height="150%">
            <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000" floodOpacity="0.7" />
          </filter>
        </defs>

        {/* ── ICON: 3D ring (outer) — extrusion layers ── */}
        <circle cx="36.4" cy="37.6" r="32" fill="none" stroke="#4A3500" strokeWidth="6.5" />
        <circle cx="35.7" cy="36.8" r="32" fill="none" stroke="#6A5000" strokeWidth="6.5" />
        <circle cx="35" cy="36" r="32" fill="none" stroke="#8A6800" strokeWidth="6.5" />

        {/* Inner ring extrusion */}
        <circle cx="36.4" cy="37.6" r="21" fill="none" stroke="#4A3500" strokeWidth="4.5" />
        <circle cx="35.7" cy="36.8" r="21" fill="none" stroke="#6A5000" strokeWidth="4.5" />
        <circle cx="35" cy="36" r="21" fill="none" stroke="#8A6800" strokeWidth="4.5" />

        {/* Main circle face background */}
        <circle cx="35" cy="36" r="32" fill="#0d0d0d" filter="url(#dropshadow)" />

        {/* Outer ring face — gold */}
        <circle cx="35" cy="36" r="32" fill="none" stroke="url(#goldFace)" strokeWidth="6.5" />

        {/* Inner ring face — gold */}
        <circle cx="35" cy="36" r="21" fill="none" stroke="url(#goldFace)" strokeWidth="4.5" />

        {/* Top-left shine arc */}
        <path
          d="M 9 23 A 32 32 0 0 1 50 5"
          fill="none"
          stroke="rgba(255,255,180,0.5)"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* ── "C" letter — 3D extrusion then face ── */}
        {/* Extrusion layers */}
        <text x="23.5" y="43.8" textAnchor="middle" fontSize="23" fontWeight="900" style={{fontFamily:"Arial Black, Arial, sans-serif"}} fill="#4A3500">C</text>
        <text x="23" y="43.2" textAnchor="middle" fontSize="23" fontWeight="900" style={{fontFamily:"Arial Black, Arial, sans-serif"}} fill="#6A5000">C</text>
        <text x="22.5" y="42.6" textAnchor="middle" fontSize="23" fontWeight="900" style={{fontFamily:"Arial Black, Arial, sans-serif"}} fill="#8A6800">C</text>
        <text x="22" y="42" textAnchor="middle" fontSize="23" fontWeight="900" style={{fontFamily:"Arial Black, Arial, sans-serif"}} fill="url(#goldFace)">C</text>

        {/* ── Superscript "2" — 3D extrusion then face ── */}
        <text x="34.5" y="29.6" textAnchor="middle" fontSize="13" fontWeight="900" style={{fontFamily:"Arial Black, Arial, sans-serif"}} fill="#4A3500">2</text>
        <text x="34" y="29" textAnchor="middle" fontSize="13" fontWeight="900" style={{fontFamily:"Arial Black, Arial, sans-serif"}} fill="#8A6800">2</text>
        <text x="33.5" y="28.5" textAnchor="middle" fontSize="13" fontWeight="900" style={{fontFamily:"Arial Black, Arial, sans-serif"}} fill="url(#goldFace)">2</text>

        {/* ── "fit" text — 3D extrusion then face ── */}
        <text x="78.8" y="55.6" fontSize="44" fontWeight="900" style={{fontFamily:"Arial Black, Arial, sans-serif"}} fill="#1a1a1a">fit</text>
        <text x="78.4" y="55.2" fontSize="44" fontWeight="900" style={{fontFamily:"Arial Black, Arial, sans-serif"}} fill="#2a2a2a">fit</text>
        <text x="78" y="54.8" fontSize="44" fontWeight="900" style={{fontFamily:"Arial Black, Arial, sans-serif"}} fill="#3a3a3a">fit</text>
        <text x="77.5" y="54" fontSize="44" fontWeight="900" style={{fontFamily:"Arial Black, Arial, sans-serif"}} fill="url(#whiteFace)">fit</text>
        <text x="77.5" y="54" fontSize="44" fontWeight="900" style={{fontFamily:"Arial Black, Arial, sans-serif"}} fill="rgba(255,255,255,0.08)">fit</text>
      </svg>
    </div>
  )
}
