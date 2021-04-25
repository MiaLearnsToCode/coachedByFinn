import './App.scss';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Bio from './components/Bio'
import Coaching from './components/Coaching'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Bio />
      <Coaching />
      <Testimonials />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
