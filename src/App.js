import './reset.css';
import './App.css';
import Header from './sections/header/header.component';
import About from './sections/about/about.component';
import Programs from './sections/programs/programs.component';
import ReadMore from './sections/read-more/read-more.component';
import Gallery from './sections/gallery/gallery.component';
import Stats from './sections/stats/stats.component';
import Footer from './sections/footer/footer.component';

function App() {
  return (
    <div>
      <Header />
      <About />
      <Programs />
      <ReadMore />
      <Gallery />
      <Stats />
      <Footer />
    </div>
  );
}

export default App;
