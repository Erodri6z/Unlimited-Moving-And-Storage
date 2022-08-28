import landing from '../../assets/landing.webp'

const Landing = () => {
  return(
    <div className="landing" style={{ backgroundImage: `url(${landing})` }}>
      <h1 id="landing-title">Welcome To United <br/> Moving & Storage</h1>
      <h3 id="slogan">Your Satisfaction Is Our #1 Priority</h3>
    </div>
  )
}

export default Landing