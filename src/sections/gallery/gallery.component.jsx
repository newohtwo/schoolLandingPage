import './gallery.styles.css';
import './gallery-desktop.styles.css';
import img0 from '../../assets/gallery-images/img0.jpg';
import img1 from '../../assets/gallery-images/img1.jpg';
import img2 from '../../assets/gallery-images/img2.jpg';
import img3 from '../../assets/gallery-images/img3.jpg';
import img4 from '../../assets/gallery-images/img4.jpg';
import img5 from '../../assets/gallery-images/img5.jpg';
import Fade from 'react-reveal/Fade';
import React from 'react';

const Gallery = () => (
  <div className="gallery">
    <div className="gallery-titel">
      <h2>OUR GALLERY</h2>
      <p>
        The Art Education Section aims at teaching art and spreading interest in
        art among different age groups. This is achieved through diverse
        trainings and workshops for different categories.
      </p>
    </div>

    <div className="gallery-images">
      <Fade bottom>
        <img src={img0} alt="abstract colors"></img>
        <img src={img1} alt="abstract colors"></img>
        <img src={img2} alt="painted woman face"></img>
        <img src={img3} alt="abstract colors"></img>
        <img src={img4} alt="painted woman face"></img>
        <img src={img5} alt="painted woman face"></img>
      </Fade>
    </div>
  </div>
);
export default Gallery;
