import flashLightIcon from '../../assets/icons/flashlight.png';
import medalIcon from '../../assets/icons/medal.png';
import paintIcon from '../../assets/icons/paint.png';
import solarHouseIcon from '../../assets/icons/solar-house.png';
import tentIcon from '../../assets/icons/tent.png';
import videoGameIcon from '../../assets/icons/video-game.png';
import './programs.styles.css';
import './programs-desktop.styles.css';
const Programs = () => (
  <div className="programs">
    <div className="programs-components">
      <div className="programs-title">
        <h2>ALL OUR PROGRAMS</h2>
        <p>
          At The Marvegos Fine Art School we encourage creativity through art —
          making one's own choices within a framework is the essence of creative
          choice.
        </p>
      </div>
      <div className="programs-info">
        <div>
          <img src={flashLightIcon}></img>
          <h2>Art Exploration</h2>
          <p>
            Our approach to art making for preschoolers and younger kids is age
            appropriate and fun.
          </p>
        </div>
        <div>
          <img src={paintIcon}></img>
          <h2>Fine Art Fundamentals</h2>
          <p>
            Structured as a developmental program spanning four sessions during
            one school year.
          </p>
        </div>
        <div>
          <img src={videoGameIcon}></img>
          <h2>Advanced Exploration</h2>
          <p>
            This program is designed to develop self-directed art makers, the
            students design their own projects.
          </p>
        </div>
        <div>
          <img src={tentIcon}></img>
          <h2>Spring Break Camps</h2>
          <p>
            Our week long school break programs are designed to give students a
            way to grow artistically at a more leisurely pace.
          </p>
        </div>
        <div>
          <img src={medalIcon}></img>
          <h2>Art Camps &#38; Classes</h2>
          <p>
            Our summer art camps allow kids to explore the full variety of art
            media from drawing still life.
          </p>
        </div>
        <div>
          <img src={solarHouseIcon}></img>
          <h2>Homeschool Art</h2>
          <p>
            Our homeschool art classes feature a curriculum that will develop
            your child’s creative and critical thinking.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Programs;
