import './App.css';
import About from './components/About';
import Home from './components/Home';
import Header  from './components/Nav/'
import Works from './components/Works'
import BackgroundDivider from './components/DividerComponent'
import Contact from './components/Contact';

function App() {
  return (
    <div className='Container'>
      <Header />
      <Home />
      <About />
      <Works />
      <BackgroundDivider />
      <Contact />
    </div>
  )
}

export default App;