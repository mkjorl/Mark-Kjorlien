import React, { useState } from 'react';
import './App.css';
import Home from './components/home.jsx'
import Footer from './components/footer';
import ContactMe from './components/contactMe';
import AboutMe from './components/aboutMe';
import Projects from './components/projects';
import Landing from './components/landing';


const App = () => {

  const [ view, setView ] = useState('landing');

  function changeView(evt){
    setView(evt);
  };


  return (
    <div className="App">
      {view === 'landing' && <Landing changeView={changeView}/>}
      {view === 'home' && <Home  changeView={changeView}/>}
      {view === "contact" && <ContactMe changeView={changeView} />}
      {view === "about" && <AboutMe changeView={changeView}/>}
      {view === "projects" && <Projects changeView={changeView}/>}
      <Footer />
    </div>
  );
}

export default App;
