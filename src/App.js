import './App.css';
import Contact from './components/contact';
import Home from './components/home'
import Projects from './components/projects';
import Skills from './components/skills';
import Experience from './experience';
const App = () => {
  return (
    <div className="App">
      <Home />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
