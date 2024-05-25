function Contact(){
return(
    <section className="contact" id="contact">
    <div className="contact-heading">
      <h1 className="my-heading text-center">Contact Me</h1>
    </div>
    <div className="contact-content">
      <div className="contact-form-container">
        <h1 className="greet-heading">Get In Touch</h1>
        <form className="contact-form">
          <input className="form-controls" type="text" placeholder="Your Name" />
          <input className="form-controls" type="text" placeholder="Your Email" />
          <input className="form-controls" type="text" placeholder="Your Phone" />
          <textarea
            className="form-controls"
            placeholder="Write your message"
            name="message"
            id=""
            cols={30}
            rows={10}
            defaultValue={" \n                "}
          />
          <input
            className="form-btn btn common-btn"
            type="submit"
            defaultValue="Send Message"
          />
        </form>
      </div>
      <div className="contact-details">
        <h1 className="greet-heading">
          <b> My Contact Details </b>
        </h1>
        <div className="details">
          <h5 className="contact-heading">Email</h5>
          <p className="contact-text">03059387882icp@gmail.com</p>
        </div>
        <div className="details">
          <h5 className="contact-heading">Phone</h5>
          <p className="contact-text">+92 3059387882</p>
        </div>
        <div className="details">
          <h5 className="contact-heading">Address</h5>
          <p className="contact-text">Peshawar, Pakistan</p>
          <p>Haji Camp</p>
          <p>G.T Road Peshawar</p>
        </div>
      </div>
    </div>
  </section>
  
)
}
export default Contact;