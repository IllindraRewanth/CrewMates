import banner from '../assets/crew-banner.jpeg'

export default function Home() {
    return (
      <div className="card">
        <h1>Welcome, Captain!</h1>
        <p>Assemble your elite crew before liftoff.</p>
        <img
          src={banner}
          alt="Crew Banner"
          style={{
            width: '100%',
            maxWidth: '450px',
            marginTop: '2rem',
            borderRadius: '1rem',
          }}
        />
     </div>
    )
  }


  
  