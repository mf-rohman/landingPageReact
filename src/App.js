import "./App.css";
import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom';
import Image from "./component/Image";
import Home from "./component/Home";
import About from "./component/About";
import Navbar from "./component/Navbar";
import NotFound from "./component/NotFound";
import Project from "./component/Project";
import Price from "./component/Price";

function App() {
  return (
    <>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/image" element={<Image />} />
            <Route path="/project" element={<Project />} />
            <Route path="/price" element={<Price />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Router>
        <br/>
    </>
    
  );
  
}

export default App;
