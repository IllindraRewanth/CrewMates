export default function XPBar({ level }) {
    const percent = Math.min(100, (level % 10) * 10)
    return (
      <div style={{ margin: '1rem 0' }}>
        <label style={{ fontWeight: 'bold' }}>Level {level}</label>
        <div style={{
          height: '14px',
          width: '100%',
          backgroundColor: '#ccc',
          borderRadius: '8px',
          overflow: 'hidden'
        }}>
          <div style={{
            width: `${percent}%`,
            backgroundColor: '#32CD32',
            height: '100%',
            transition: 'width 0.5s ease'
          }} />
        </div>
      </div>
    )
  }
  