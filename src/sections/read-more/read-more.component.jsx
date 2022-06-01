import booksImg from '../../assets/library-books.jpg';
import './read-more.styles.css';
import './read-more-ipad.styles.css';
import './read-more-desktop.styles.css';
const ReadMore = () => (
  <div className="read-more">
    <div className="read-more-container">
      <div>
        <img src={booksImg}></img>
      </div>
      <div className="read-more-info-text">
        <h2>WE'D LOVE TO HEAR FROM YOU</h2>
        <p>
          The atmosphere is relaxed, fun and social, allowing kids to pursue
          their own creative bent and focus on a single project to completion.
          Many students register for multiple weeks and never get bored because
          the projects vary every week.
        </p>
        <button className="read-more-button">read more</button>
      </div>
    </div>
  </div>
);

export default ReadMore;
