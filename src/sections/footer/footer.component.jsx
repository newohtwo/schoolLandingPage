import './footer.styles.css';
import './footer-desktop.styles.css';
import facebookIcon from '../../assets/social-icons/facebook.png';
import instagramIcon from '../../assets/social-icons/instagram.png';
import linkedinIcon from '../../assets/social-icons/linkedin.png';
import telegramIcon from '../../assets/social-icons/telegram.png';
import whatsappIcon from '../../assets/social-icons/whatsapp.png';
import youtubeIcon from '../../assets/social-icons/youtube.png';
import { useState } from 'react';

const Footer = () => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
  });

  function handleOnChange(event) {
    const { name, value } = event.target;
    setInputs((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
    console.log(inputs);
  }

  return (
    <footer>
      <div className="footer-contant-info">
        <h2>
          Questions?
          <br />
          Comments?
          <br />
          We'd love to hear from you.
        </h2>
        <p>
          The school is open 10:00am to 5:00pm Tuesday to Friday and 10:00am to
          3:00pm on Saturday. During July and August Summer Camps, we're open
          from Monday to Friday 8:30am to 4:30pm.
        </p>
        <p>
          Our mailing address is:
          <br />
          152A Charlotte Street, Peterborough
          <br /> ONPhone: 705-742-3221
        </p>
        <div className="footer-icons">
          <img src={facebookIcon} alt="facebook social media link"></img>
          <img src={instagramIcon} alt="instagram social media link"></img>
          <img src={linkedinIcon} alt="linkedin social media link"></img>
          <img src={telegramIcon} alt="telegram social media link"></img>
          <img src={whatsappIcon} alt="whatsapp social media link"></img>
          <img src={youtubeIcon} alt="youtube social media link"></img>
        </div>
      </div>
      <div className="footer-contant-form">
        <div className="footer-form">
          <input
            onInput={(e) => handleOnChange(e)}
            type="text"
            name="name"
            placeholder="Enter your Name"
          />
          <input
            onInput={(e) => handleOnChange(e)}
            type="email"
            pattern=".+@globex\.com"
            name="email"
            placeholder="Enter a valid email address"
          />
          <input
            onInput={(e) => handleOnChange(e)}
            className="footer-form-large"
            type="text"
            name="message"
            placeholder="Enter your message"
          />
          <button className="footer-button">Submit</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
