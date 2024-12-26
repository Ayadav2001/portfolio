import React from 'react'
import './Contact.css';
import Walmart from '../../assets/walmart.png'
import Adobe from '../../assets/adobe.png'
import Microsoft from '../../assets/microsoft.png'
import Facebook from '../../assets/facebook.png'
import FacebookIcon from '../../assets/facebook-icon.png'
import TwitterIcon from '../../assets/twitter.png'
import YoutubeIcon from '../../assets/youtube.png'
import InstagramIcon from '../../assets/instagram.png'

const Contact = () => {
  return (
    <section id='contact'>
      <div className="clients">
        <h1 className="contactpageTitle">My Clients</h1>
        <p className="clientDesc">
            I have had a opportunity to work with a diverse group of companies.
            Some of the notable companies I have worked with includes
        </p>
        <div className="clientImgs">
            <img src={Walmart} alt="Clients" className="ClientImg" />
            <img src={Adobe} alt="Clients" className="ClientImg" />
            <img src={Microsoft} alt="Clients" className="ClientImg" />
            <img src={Facebook} alt="Clients" className="ClientImg" />
        </div>
      </div>
      <div className="contactPage">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
        <form className="contactForm">
            <input type="text" className="name" placeholder="Your Name"/>
            <input type="email" className="email" placeholder="Your Email"/>
            <textarea className='msg' name="message"rows='5' placeholder='Your Message'></textarea>
            <button type='submit' value='Send' className="submitBtn">Submit</button>
            <div className="links">
                <img src={FacebookIcon} alt="Icons" className="link" />
                <img src={TwitterIcon} alt="Icons" className="link" />
                <img src={YoutubeIcon} alt="Icons" className="link" />
                <img src={InstagramIcon} alt="Icons" className="link" />
            </div>
        </form>
      </div>
      
    </section>
  )
}

export default Contact
