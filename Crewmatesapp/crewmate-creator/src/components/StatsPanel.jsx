export default function StatsPanel({ crewmates }) {
    const traitCount = {}
    crewmates.forEach(c => {
      traitCount[c.trait] = (traitCount[c.trait] || 0) + 1
    })
  
    const topTrait = Object.entries(traitCount).sort((a, b) => b[1] - a[1])[0]
  
    return (
      <div className="card" style={{
        background: '#000',
        color: '#0f0',
        fontFamily: 'monospace',
        border: '2px solid lime'
      }}>
        <h3>📊 Crew HUD</h3>
        <p>Total Members: {crewmates.length}</p>
        <p>Top Trait: {topTrait?.[0]} ({topTrait?.[1]})</p>
        <p>Mission Readiness: {Math.floor(Math.random() * 30) + 70}%</p>
      </div>
    )
  }
  