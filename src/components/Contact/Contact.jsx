import '../../styles/contact.css'

const Contact = () => {
  return(
    <>
    
    <div className="contact" >
      <h1>Contact Us</h1>
      <p>Unlimited Moving and Storage</p>
      <p>7080 N McCormick Blvd, Lincoln, IL 60712</p>
      <p>(888) 223-9877</p>
    </div>
    <div className='map'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2964.61342617852!2d-87.71391888467289!3d42.00857126521832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fcfe391bd7599%3A0x38364a2314eaaf84!2sUNLIMITED%20MOVING%20AND%20STORAGE!5e0!3m2!1sen!2sus!4v1661735072907!5m2!1sen!2sus" 
      title="Location"
      width="100%" 
      height="400" 
      style={{ border:0 }} 
      allowfullscreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
    </>
    
  )
}

export default Contact