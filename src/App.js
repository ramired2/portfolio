import logo from './logo.svg';
import './style/App.css';

import React, { useState } from 'react';

import Navbar from './components/Navbar.js';
import AbtMe from './pages/AboutMe.js';
import Projects from './pages/Projects';
import ErrorP from './pages/404';

import {
  HashRouter as Router, // store the components and its routes as an object
  Route, // a statement that holds the specific path of the app and the component's name, renders it once it matches the URL
  Switch, // renders the default components once the app rendered, switches between Switch as needed
} from "react-router-dom";
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

{/* <img src={logo} className="App-logo" alt="logo" /> */}

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router basename={window.location.pathname || ''}>
        <Switch>
          <Route exact path="/aboutme" component={AbtMe} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/404" component={ErrorP} />
          <Route path="*" element={<Redirect to="/404" />}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
