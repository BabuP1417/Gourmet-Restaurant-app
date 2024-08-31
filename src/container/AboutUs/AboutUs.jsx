import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">All our ingredients are sourced from local producers to ensure quality and freshness. The taste is always the same: finger-licking good! We promise an experience that will keep you coming back for more! 
          <p>Come have a relaxing dinner with delicious comfort food!</p>
        </p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Facilities</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
        <li>Outdoor Seating</li>
        <li>Banquet Halls</li>
        <li>Complimentary Wi-Fi</li>
        <li>Party Hall with A/C</li>
        <li>Ambient Dining Hall with A/C </li>

        <p>Forget about the daily stress and come relax with us</p>
        
        </p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
