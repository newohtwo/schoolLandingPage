import hand from '../../assets/hand-with-brush.jpg';

import pastelImg from '../../assets/hompageImage.jpg';
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  Move,
} from 'react-scroll-motion';
import './header.styles.css';
import './header-ipad.styles.css';
import './header-desktop.styles.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header-text">
        <p className="header-text-small ">ART</p>
        <p>SCHOOL</p>
      </div>
      <img className="header-img" src={pastelImg}></img>
      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={Move(0, 0, -150, 0)}>
            <img src={hand} className="header-hand-img"></img>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </div>
  );
};

export default Header;
