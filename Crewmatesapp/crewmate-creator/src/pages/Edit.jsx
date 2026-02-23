import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { supabase } from '../supabase/client'

export default function Edit() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [formData, setFormData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('crewmates')
        .select('*')
        .eq('id', id)
        .single()
      if (!error) setFormData(data)
      else console.error(error)
    }
    fetchData()
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { error } = await supabase
      .from('crewmates')
      .update(formData)
      .eq('id', id)

    if (error) console.error(error)
    else navigate(`/crewmate/${id}`)
  }

  const handleDelete = async () => {
    if (confirm('Delete crewmate?')) {
      await supabase.from('crewmates').delete().eq('id', id)
      navigate('/gallery')
    }
  }

  if (!formData) return <p>Loading...</p>

  return (
    <form onSubmit={handleSubmit} className="card">
      <h2>Edit Crewmate</h2>
      {['name', 'category', 'class', 'primary_tool', 'level', 'trait', 'alignment'].map((f) => (
        <div key={f}>
          <label>{f}</label>
          <input name={f} value={formData[f]} onChange={handleChange} />
        </div>
      ))}
      <button type="submit">Update</button>
      <button type="button" onClick={handleDelete} style={{ marginLeft: '1rem', color: 'red' }}>
        Delete
      </button>
    </form>
  )
}
