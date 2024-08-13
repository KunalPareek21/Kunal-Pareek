import React from 'react';
import './About.css';
import '../../Assets/styles/global.css';
import mobileImage from '../../Assets/images/Mobile.png';
import desktopImage from '../../Assets/images/Desktop.png';

const siteName = process.env.REACT_APP_SITE_NAME;

const About = () => {
  return (
    <div id="About" className="row about_me_section_main_row">
      <h2 className="about_us_heading">About</h2>
      <div className="col-md-6 about_us_left">
        <p className="about_me_para">
          Hello, my name is <span>{siteName}</span>, and I am a dedicated frontend web developer
          with over 3<sup>+</sup> years of professional experience. I have a passion for creating visually stunning
          and highly functional websites that provide excellent user experiences. My expertise lies in
          leveraging the latest web technologies to bring innovative and responsive designs to life.
        </p>
        <p className="about_me_para">
          I am proficient in a wide range of programming languages and frameworks,
          including HTML, CSS, JavaScript, jQuery, and React. My technical skills, combined with my
          attention to detail and commitment to staying updated with industry trends, enable me to deliver
          high-quality web solutions that meet client requirements and exceed expectations.
        </p>
      </div>
      <div className="col-md-6 about_us_right">
        <div className="responsive_mobile_design_div">
          <div className="mobile-frame">
            <div className="notch"></div>
            <div className="frame-content">
              <img src={mobileImage} alt="Mobile View" />
            </div>
          </div>
          <div className="desktop_frame_parent">
            <div className="desktop-frame">
              <div className="frame-content">
                <img src={desktopImage} alt="Desktop View" />
              </div>
            </div>
            <div className="desktop_stand"></div>
            <div className="desktop_stand_line"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
