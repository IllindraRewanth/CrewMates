import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabase/client'
import XPBar from './XPBar'

const categories = {
  Engineer: ['Data Pad', 'Bug Tracker', 'Hacking Tool'],
  Pilot: ['Navigation Map', 'AutoPilot', 'Radar Scanner'],
  Medic: ['Medkit', 'Vitals Monitor', 'Scanner']
}

export default function CrewmateForm() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    class: '',
    category: '',
    primary_tool: '',
    level: '',
    trait: '',
    alignment: ''
  })

  const [errorMsg, setErrorMsg] = useState(null)
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMsg(null)

    try {
      const { error } = await supabase.from('crewmates').insert([formData])
      if (error) {
        console.error('Supabase Insert Error:', error)
        setErrorMsg('Failed to create crewmate. Please check fields or try again.')
      } else {
        console.log('✅ Crewmate inserted:', formData)
        setSuccess(true)
        setTimeout(() => navigate('/gallery'), 1000)
      }
    } catch (err) {
      console.error('Unexpected Error:', err)
      setErrorMsg('Something went wrong.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card create-card">
      <h2>Create New Crewmate</h2>

      <label>Category</label>
      <select name="category" value={formData.category} onChange={handleChange} required>
        <option value="">-- select --</option>
        {Object.keys(categories).map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      {formData.category && (
        <>
          <label>Primary Tool</label>
          <select name="primary_tool" value={formData.primary_tool} onChange={handleChange} required>
            <option value="">-- tool --</option>
            {categories[formData.category].map(tool => (
              <option key={tool} value={tool}>{tool}</option>
            ))}
          </select>
        </>
      )}

      {['name', 'class', 'level', 'trait', 'alignment'].map(field => (
        <div key={field}>
          <label>{field}</label>
          <input
            name={field}
            value={formData[field]}
            onChange={handleChange}
            required
          />
        </div>
      ))}

      {formData.level && !isNaN(formData.level) && (
        <XPBar level={parseInt(formData.level)} />
      )}

      <button type="submit">💾 Save Crewmate</button>

      {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
      {success && <p style={{ color: 'green' }}>✅ Crewmate Created!</p>}
    </form>
  )
}
