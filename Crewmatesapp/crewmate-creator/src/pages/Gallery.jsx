import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../supabase/client'
import StatsPanel from '../components/StatsPanel'

export default function Gallery() {
  const [crewmates, setCrewmates] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCrewmates = async () => {
      const { data, error } = await supabase
        .from('crewmates')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error fetching crewmates:', error)
      } else {
        console.log('📦 Fetched crewmates:', data)
        setCrewmates(data || [])
      }
      setLoading(false)
    }

    fetchCrewmates()
  }, [])

  return (
    <div className="card">
      <h2>🧑‍🚀 Crewmate Gallery</h2>

      {loading ? (
        <p>Loading...</p>
      ) : crewmates.length === 0 ? (
        <p>No crewmates yet! Try adding one from the Create page.</p>
      ) : (
        <>
          <StatsPanel crewmates={crewmates} />

          <ul style={{ marginTop: '2rem' }}>
            {crewmates.map(c => (
              <li key={c.id}>
                <Link to={`/crewmate/${c.id}`}>
                  {c.name || 'Unnamed'} — {c.class || 'No Class'}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}
