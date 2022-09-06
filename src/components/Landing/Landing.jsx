import landing from '../../assets/newlanding.webp'

const Landing = () => {
  return(
    <div className="landing" style={{ backgroundImage: `url(${landing})` }}>
      <div id="landing-text">
        <h1 id="landing-title">Welcome To United <br/> Moving & Storage</h1>
        <h3 id="slogan">Your Satisfaction Is Our #1 Priority</h3>
        <a href="/Contact" id="landing-contact">
          <button id="landing-btn">Book Now</button>
        </a>
      </div>
    </div>
  )
}

export default Landing