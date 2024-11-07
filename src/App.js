import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import WhyChoose from './components/WhyChoose';
import Benefits from './components/Benefits';
import Approach from './components/Approach';

function App() {
  return (
    <div className="App">
      <div>
      <Navbar />
      <Home />
      <About />
      <WhyChoose />
      <Benefits />
      <Approach />
    </div>
    </div>
  );
}

export default App;
