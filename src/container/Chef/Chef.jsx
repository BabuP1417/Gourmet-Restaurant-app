import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Our Team's" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans"></p>
        </div>
        <p className="p__opensans"> We are a micro team of chefs who are constantly engaging with each other to surpass our own personal best. Our ultimate goal is for a guest to feel welcome into our family. We focus on growing our team from the roots, developing a young generation of chefs and service executives who can explore the world of fine cuisine by providing them space to grow and contribute their ideas.</p>
      </div>

      <div className="app__chef-sign">
        <p>Gourmet Grotto Restaurant</p>
        <p className="p__opensans">Team</p>
      </div>
    </div>
  </div>
);

export default Chef;
