import '../../styles/about.css'
import fragile from "../../assets/fragile.jpg" 
const About = () => {
  return(
    <>
    <div className="About">
      <div id="about-text">
        <h1>About</h1>
        <p>With over 20 years of experience, Unlimited Moving & Storage has been a go-to company for people from all walks of life. Unlimited Moving has helped countless individuals, families, and offices, relocate. Because we have pricing to fit all budgets, impeccable service, and care about our client's peace of mind, we’ve become a staple to all our customers and continue to strive for the utmost quality of service.</p>
        <p>We provide every service you could possibly need, have the capable tools to move any household item, and we take great care in packaging and safeguarding your most precious belongings.</p>
        <p>We hope you’ll call for a quote and allow us to assist you in your move!</p>
      </div>
      <div id="fragile">
        <img src={fragile} id="fragile-image" alt="fragile" />
      </div>
    </div>
    
    </>
  )
}

export default About