import React, { useState } from 'react';
import './App.css';
import Home from './components/home.jsx'
import Footer from './components/footer';
import ContactMe from './components/contactMe';
import AboutMe from './components/aboutMe';
import Projects from './components/projects';

const App = () => {

  const [ view, setView ] = useState('home');

  function changeView(evt){
    setView(evt);
  };


  return (
    <div className="App">
      {view === 'home' && <Home  changeView={changeView}/>}
      {view === "contact" && <ContactMe />}
      {view === "about" && <AboutMe />}
      {view === "projects" && <Projects />}
      <Footer />
    </div>
  );
}

export default App;
