<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Test from "./Example/reacteg";
import Myfunction from "./Example/navbar";
import Home from "./Example/Home";
import About from "./Example/About";
import Projects from "./Example/Projects";
import Contact from "./Example/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Myfunction />
        <Routes>
          <Route exact path="/Home" element={<Home />}></Route>
          <Route exact path="/About" element={<About />}></Route>
          <Route exact path="/Contact" element={<Contact />}></Route>
          <Route exact path="/Projects" element={<Projects />}></Route>
        </Routes>
        <header className="App-header">
          <Test />
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Router>
=======
import logo from './logo.svg';
import './App.css';
import Test from './Example/reacteg';
import Propscomp from './Example/propscomp';
import Myfunction from './functionalcomp';
import Myclass from './Example/classcomp';


function App() {
  return (
    <div className="App">
      <Test/>
      <Propscomp name=" KEC"/>
      <Myfunction name="Sakthivel"/>
      <Myclass/>
      <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
         
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
>>>>>>> 1d456f9f89cc0a01eede4223fec6990c75513031
  );
}

export default App;
