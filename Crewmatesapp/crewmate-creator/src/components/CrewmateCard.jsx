import { Link } from 'react-router-dom'

export default function CrewmateCard({ crewmate }) {
  return (
    <div className="card">
      <h3>{crewmate.name}</h3>
      <p><strong>{crewmate.class}</strong> – {crewmate.category}</p>
      <p>Tool: {crewmate.primary_tool}</p>
      <Link to={`/crewmate/${crewmate.id}`}>View Details →</Link>
    </div>
  )
}
