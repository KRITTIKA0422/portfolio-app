
import Home from "./Portfolio/Home/Home";
import About from './Portfolio/About/About';
import Skills from './Portfolio/Skills/Skills';
import Projects from "./Portfolio/Projects/Projects";
import HandsOnLab from "./Portfolio/HandsOnLab/HandsOnLab";
import Interests from "./Portfolio/Interests/Interests";
import Contact from "./Portfolio/Contact/Contact";
import { Routes, Route, Link } from "react-router-dom";
import './App.css';

function App(){
    return(
        <div className="App">
        <nav className="routing">
            <ul className="route-list">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">ABOUT ME</Link></li>
            <li><Link to="/skills">SKILLS</Link></li>
            <li><Link to="/projects">PROJECTS</Link></li>
            <li><Link to="/experience">HANDS ON LAB</Link></li>
            <li><Link to="/interests">INTERESTS</Link></li>
            <li><Link to="/contact">CONTACT ME</Link></li>
            </ul>
            </nav> 

        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={ <Skills/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/experience" element={ <HandsOnLab/>} />
        <Route path="/interests" element={<Interests/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes> 
        </div>
    );
}

export default App;