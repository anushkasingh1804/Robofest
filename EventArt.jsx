// Original SVG illustrations for each event (not photography).
export default function EventArt({ id }) {
  const s = { fill: 'none', stroke: '#171B16', strokeWidth: 3, strokeLinecap: 'round', strokeLinejoin: 'round' }
  if (id === 'race') return (
    <svg viewBox="0 0 600 220" className="ev-svg" role="img" aria-label="Illustration of a small wheeled robot following a curving track">
      <path d="M20 170 C140 170 150 50 260 60 S 400 190 470 120 S 540 60 585 70" {...s} strokeWidth="26" opacity=".15" />
      <path className="dash" d="M20 170 C140 170 150 50 260 60 S 400 190 470 120 S 540 60 585 70" {...s} stroke="#EC4E24" strokeDasharray="14 12" />
      <g transform="translate(250 24) rotate(-8)"><rect width="44" height="28" fill="#171B16" /><circle cx="8" cy="30" r="8" fill="#D5F04F" stroke="#171B16" strokeWidth="3" /><circle cx="36" cy="30" r="8" fill="#D5F04F" stroke="#171B16" strokeWidth="3" /></g>
    </svg>)
  if (id === 'combat') return (
    <svg viewBox="0 0 400 320" className="ev-svg" role="img" aria-label="Illustration of two angular robots facing each other inside an arena square">
      <rect x="20" y="20" width="360" height="280" {...s} strokeDasharray="4 8" />
      <g {...s}><path d="M70 200l50-50 70 20v70H70z" fill="#EC4E24" /><path d="M330 120l-50 50-70-20v-70h120z" fill="#E9E7D9" /><circle cx="110" cy="240" r="16" fill="#171B16" /><circle cx="290" cy="130" r="16" fill="#171B16" /></g>
    </svg>)
  return (
    <svg viewBox="0 0 520 360" className="ev-svg" role="img" aria-label="Illustration of a robot emitting sensor rays that detect obstacles">
      <g {...s}><rect x="30" y="150" width="70" height="56" fill="#D5F04F" /><circle cx="100" cy="178" r="12" fill="#171B16" />
        <path className="ray" d="M112 178L420 70M112 178L440 178M112 178L420 290" strokeDasharray="6 8" strokeWidth="2" />
        <circle cx="440" cy="70" r="26" fill="#EC4E24" /><rect x="450" y="150" width="46" height="56" fill="#E9E7D9" /><path d="M440 276l30 40h-60z" fill="#B8B8AA" /></g>
    </svg>)
}
