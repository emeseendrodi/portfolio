import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css'

function App() {


  return (
    <div>
      <NavBar />
      <div className='container'>
      <Hero />
      <About />
      <Projects />
      <Contact />
      </div>
    
    
    </div>
      
    
  );
}


export default App
