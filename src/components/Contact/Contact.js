import React, { useEffect, useState } from 'react';
import './Contact.css';
import '../../Assets/styles/global.css';

const siteName = process.env.REACT_APP_SITE_NAME;

const Contact = () => {
  const [currentYear, setCurrentYear] = useState(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <div id="Contact" className="row contact_us_section_row">
      <h2 className="contact_us_heading_customs">Contact</h2>
      <div className="col-md-8 contact_us_section_left">
        <form action="" className="contact_us_form">
          <div className="form_pair name_section">
            <label>
              <input name="firstName" type="text" placeholder="First Name" />
            </label>
            <label>
              <input name="lastName" type="text" placeholder="Last Name" />
            </label>
          </div>
          <div className="form_pair email_section">
            <label>
              <input name="email" type="email" placeholder="Email Address" />
            </label>
            <label>
              <input name="phone" type="tel" placeholder="Phone Number" />
            </label>
          </div>
          <div className="form_textarea">
            <textarea name="message" id="message" placeholder="Message" rows="3"></textarea>
          </div>

          <div className="form_submit_button_area">
            <button id="buttonElement" className="form_submit_button">
              <span className="form_submit_button_label">Send</span>
            </button>
          </div>
        </form>
      </div>
      <div className="col-md-4 contact_us_section_right">
        <div className="contact_more_area">
          <a href="" className="contact_info_area">
            <i className="fas fa-map-marker-alt"></i> Jaipur, Rajasthan
          </a>
          <a href="tel:8278654715" className="contact_info_area">
            <i className="fas fa-mobile-alt"></i> +91-827-865-4175
          </a>
          <a href="mailto:kunalpareek56@gmail.com" className="contact_info_area">
            <i className="fas fa-envelope"></i> Kunalpareek56@gmail.com
          </a>
        </div>
        <div className="contact_icon_area">
          <a href="https://www.linkedin.com/in/kunal-pareek-bba0a2225/" target="_blank" className="contact_info_social">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://www.facebook.com/Kunal.rock.275" target="_blank" className="contact_info_social">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/kunal.pareek/" target="_blank" className="contact_info_social">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="footer_note_div">
          <p className="footer_note">
            <span>{currentYear}</span> © All rights reserved. Designed by <a href="https://www.linkedin.com/in/kunal-pareek-bba0a2225/" target="_blank">{siteName}</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
