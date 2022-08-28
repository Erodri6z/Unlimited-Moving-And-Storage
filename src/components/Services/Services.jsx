import '../../styles/services.css'
import packers from '../../assets/Packers-and-movers-6.webp'
import movers from '../../assets/movers-carrying-boxes.webp'
import boxes from '../../assets/boxes.webp'

const Services = () => {
  return(
    <div className="services">
      <h1>Services</h1>
      <div id="card-container">
        <div className="card">
          <img src={packers} alt="packers" />
          <div className="container">
            <h4>Long Distance Moving Services</h4>
            <p>Our team is trained and experienced to get your move done efficiently and successfully. They will cater to all your moving needs.</p>
          </div>
        </div>
        <div className="card">
          <img src={movers} alt="movers" />
          <div className="container">
            <h4>Storage Services</h4>
            <p>We offer a secure and climate-controlled storage facility to ensure the protection and preservation of your items. Ready to ship out in as much or as little time needed.</p>
          </div>
        </div>
        <div className="card">
          <img src={boxes} alt="boxes" />
          <div className="container">
            <h4>Full Packing Services</h4>
            <p>Unlimited Moving is capable of packing only your furniture and leaving the boxes to you, or we offer a full packing service where our professionals provide and pack every last item!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services