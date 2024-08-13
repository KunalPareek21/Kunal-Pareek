import React from 'react';
import './Homepage.css'; 
import '../../Assets/styles/global.css';
import HeroImage from '../../Assets/images/Kunal.png';
import animatedGif from '../../Assets/images/home_animate.gif'; 

const siteName = process.env.REACT_APP_SITE_NAME;
const Homepage = () => {
  return (
    <div id="homePage" className="row homepage_main_container">
      <div className="col-md-6 hero_image_left_column">
        <div className="hero_image_wrapper">
          <img className="hero_image_logo" src={HeroImage} alt="Kunal" />
        </div>
      </div>
      <div className="col-md-6 hero_right_column">
        <h1 className="main_heading_text">Web Developer</h1>
        <p className="paragraph_text">Hi, I'm <span>{siteName}.</span> As a web developer, I focus on building
          websites that are not only visually appealing but also highly functional. Let's collaborate to create a
          web presence that stands out and drives success.</p>
        <div className="home_animated_gif">
          <img src={animatedGif} alt="Animation" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
