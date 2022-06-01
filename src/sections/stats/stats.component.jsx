import './stats.styles.css';
import './stats-desktop.styles.css';
import CountUp from 'react-countup';
import { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import img6 from '../../assets/gallery-images/img6.jpg';
import img7 from '../../assets/gallery-images/img7.jpg';
import img8 from '../../assets/gallery-images/img8.jpg';

const Stats = () => {
  const [visibility, setVisibility] = useState(false);

  //when countup is visiable show the animation
  function onVisable(isVisible) {
    setVisibility(true);
  }

  return (
    <div className="stats">
      <div className="stats-cointainer">
        <div className="stats-counter-container">
          <VisibilitySensor
            onChange={(isVisible) => {
              if (isVisible) onVisable(isVisible);
            }}
          >
            <div className="stat-counter">
              {visibility ? <CountUp end={5000} duration={6} /> : null}
              <p>STUDENTS</p>
            </div>
          </VisibilitySensor>
          <div className="stat-counter">
            {visibility ? <CountUp end={150} duration={6} /> : null}
            <p>TEACHERS</p>
          </div>
          <div className="stat-counter">
            {visibility ? <CountUp end={45} duration={6} /> : null}
            <p>WINNERS</p>
          </div>
          <div className="stat-counter">
            {visibility ? <CountUp end={250} duration={6} /> : null}
            <p>AWARDS</p>
          </div>
        </div>
      </div>
      <div className="stats-gallery">
        <img src={img6}></img>
        <img src={img7}></img>
        <img src={img8}></img>
      </div>
    </div>
  );
};

export default Stats;
