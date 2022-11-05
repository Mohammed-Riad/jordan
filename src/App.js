import {
  Routes,
  Route,
} from "react-router-dom";
import React from "react";
import Bmifunction from './Bmifunction';
import About from './About';
import Home from './Home';
import Header from './Header';
import Contact from './Contact';
import Footer from './Footer';
// import Tours from './Tours';
export default function App() {
  return (
    
     <>
      <Header />
        <Routes>
          <Route exact element={<Home />} path="/" />
          {/* <Route exact element={<Tours />} path="Tours" /> */}
          <Route exact element={<About />} path="/About" />
          <Route exact element={<Contact />} path="/Contact" />
          <Route exact element={<Bmifunction />} path="/Bmifunction/" />
          {/* <Route exact element={<View />} path="/View/:Id" /> */}
        </Routes>
        <Footer />
     </>
      

    
    
  );
}