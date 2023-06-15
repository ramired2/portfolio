import logo from './logo.svg';
import './style/App.css';

import React, { useState } from 'react';

import Navbar from './components/Navbar.js';
import AbtMe from './pages/AboutMe.js';
import Projects from './pages/Projects';

import {
  BrowserRouter as Router, // store the components and its routes as an object
  Route, // a statement that holds the specific path of the app and the component's name, renders it once it matches the URL
  Switch, // renders the default components once the app rendered, switches between Switch as needed
} from "react-router-dom";
{/* <img src={logo} className="App-logo" alt="logo" /> */}
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Switch>
          <Route exact path="/" component={AbtMe} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
