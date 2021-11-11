import './App.css';
import Contact from './components/contact';
import Home from './components/home'
import Projects from './components/projects';
import Skills from './components/skills';
const App = () => {
  return (
    <div className="App">
      <Home/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
