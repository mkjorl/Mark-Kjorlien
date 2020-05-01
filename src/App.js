import React, { useState } from 'react';
import './App.css';
import Home from './components/home.jsx'
import Footer from './components/footer';
import ContactMe from './components/contactMe';
import AboutMe from './components/aboutMe';
import Projects from './components/projects';
import Landing from './components/landing';
import{
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

const App = () => {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/Mark-Kjorlien">
            <Landing />
          </Route>
          <Route exact path="/Mark-Kjorlien/Home">
            <Home />
          </Route>
          <Route exact path="/Mark-Kjorlien/About">
            <AboutMe />
          </Route>
          <Route exact path="/Mark-Kjorlien/Projects">
            <Projects />
          </Route>
          <Route exact path="/Mark-Kjorlien/Contact">
            <ContactMe />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );

}

export default App;
