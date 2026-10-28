// Original SVG mechanical organism "UNIT-26". Pose is driven by props (deg / px) or CSS idle animation.
const J = { x: 200, y: 310 }
const rot = (deg, ox, oy, t = 0.9) => ({ transform: `rotate(${deg}deg)`, transformOrigin: `${ox}px ${oy}px`, transition: `transform ${t}s cubic-bezier(.5,0,.2,1)` })

export default function Mascot({ joint = 0, armA = -35, armB = 20, grip = 10, scan = 0, idle = false, hi = {}, title = 'Original illustration of a mechanical organism with two arms, a gripper and a round sensor' }) {
  const on = (k) => (hi[k] ? '#D5F04F' : '#E9E7D9')
  return (
    <svg className={idle ? 'mascot idle' : 'mascot'} viewBox="0 0 400 520" role="img" aria-label={title}>
      <g stroke="#171B16" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round">
        <rect x="90" y="440" width="220" height="30" fill="#EC4E24" />
        <rect x="130" y="410" width="140" height="30" fill="#E9E7D9" />
        <circle cx="120" cy="486" r="26" fill="#171B16" /><circle cx="120" cy="486" r="9" fill="#D5F04F" />
        <circle cx="280" cy="486" r="26" fill="#171B16" /><circle cx="280" cy="486" r="9" fill="#D5F04F" />
        <rect x="178" y="230" width="44" height="182" fill="#B8B8AA" />
        <path d="M178 360h44M178 380h44M178 400h44" strokeWidth="2" />
        <g style={rot(armA, J.x, J.y)}>
          <rect x="60" y="298" width="140" height="24" fill={on('armA')} />
          <circle cx="68" cy="310" r="12" fill="#EC4E24" />
          <path d="M120 322 L150 352 L180 322" fill="none" strokeWidth="3" />
          <circle cx="150" cy="352" r="6" fill="#171B16" />
        </g>
        <g style={rot(armB, J.x, J.y)}>
          <rect x="200" y="300" width="130" height="20" fill={on('armB')} />
          <g style={rot(grip * 2 - 20, 330, 310)}>
            <circle cx="330" cy="310" r="13" fill="#EC4E24" />
            <rect x="330" y="304" width="46" height="12" fill="#E9E7D9" />
            <g style={rot(grip, 376, 310)}><path d="M376 304 L398 292 L398 300 L384 310Z" fill="#171B16" /></g>
            <g style={rot(-grip, 376, 310)}><path d="M376 316 L398 328 L398 320 L384 310Z" fill="#171B16" /></g>
          </g>
        </g>
        <circle cx={J.x} cy={J.y} r="44" fill={on('joint')} />
        <g className={idle ? 'spin' : undefined} style={{ transformOrigin: `${J.x}px ${J.y}px`, ...(idle ? {} : { transform: `rotate(${joint}deg)`, transition: 'transform 1.2s cubic-bezier(.5,0,.2,1)' }) }}>
          <circle cx={J.x} cy={J.y} r="30" fill="#171B16" />
          <circle cx={J.x} cy={J.y} r="30" fill="none" stroke="#D5F04F" strokeWidth="4" strokeDasharray="10 9" />
          <rect x="194" y="282" width="12" height="20" fill="#EC4E24" stroke="none" />
        </g>
        <circle cx={J.x} cy={J.y} r="7" fill="#E9E7D9" />
        <rect x="190" y="190" width="20" height="44" fill="#171B16" />
        <rect x="130" y="110" width="140" height="84" fill="#E9E7D9" />
        <circle cx="200" cy="152" r="32" fill="#171B16" />
        <circle cx="200" cy="152" r="32" fill="none" stroke={hi.sensor ? '#D5F04F' : '#EC4E24'} strokeWidth="4" strokeDasharray="3 5" />
        <g className={idle ? 'scan' : undefined} style={idle ? undefined : { transform: `translateX(${scan}px)`, transition: 'transform .8s ease-in-out' }}>
          <circle cx="200" cy="152" r="12" fill="#D5F04F" stroke="none" />
          <circle cx="200" cy="152" r="4" fill="#171B16" stroke="none" />
        </g>
        <path d="M150 110V84M250 110V96M250 96h22" fill="none" />
        <circle cx="150" cy="80" r="6" fill="#EC4E24" />
      </g>
    </svg>
  )
}
