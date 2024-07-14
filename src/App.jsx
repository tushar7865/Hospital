// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import About from './Components/About';
import Contact from './Components/Contact';
import Departments from './Components/Departments';
import Header from './Components/Header';
import Home from './Components/Home';
function App() {
  return (
    <>
    <Header/>
   <Home/>
   <About/>
   <Departments/>
    <Contact/>
<footer>
      <p>&copy; 2012 Mai Mangeshkar Hospital</p> 
      <p id='para'>Mumbai - Bangalore Highway, Survey No. 117/1, Service Rd, Warje, Pune, Maharashtra 411058</p>
      <h6>Maintained by Piton Systems.</h6>
    </footer> 
    </>
  );
}

export default App;
