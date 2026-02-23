import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase } from '../supabase/client'
import XPBar from '../components/XPBar'

export default function Detail() {
  const { id } = useParams()
  const [crewmate, setCrewmate] = useState(null)

  useEffect(() => {
    const fetchOne = async () => {
      const { data, error } = await supabase
        .from('crewmates')
        .select('*')
        .eq('id', id)
        .single()

      if (error) console.error(error)
      else setCrewmate(data)
    }

    fetchOne()
  }, [id])

  if (!crewmate) return <p>Loading...</p>

  return (
    <div className="card">
      <h2>{crewmate.name}</h2>
      <p><strong>Class:</strong> {crewmate.class}</p>
      <p><strong>Category:</strong> {crewmate.category}</p>
      <p><strong>Tool:</strong> {crewmate.primary_tool}</p>
      <p><strong>Level:</strong> {crewmate.level}</p>
    {/* Inside JSX */}
    <p><strong>Level:</strong> {crewmate.level}</p>
    <XPBar level={parseInt(crewmate.level)} />

      <p><strong>Trait:</strong> {crewmate.trait}</p>
      <p><strong>Alignment:</strong> {crewmate.alignment}</p>
      <br />
      <Link to={`/crewmate/${id}/edit`}>✏️ Edit</Link> | <Link to="/gallery">🔙 Back</Link>
    </div>
  )
}
