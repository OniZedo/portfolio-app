import './App.css';
import Home from './Pages/Home'
import About from './Pages/About'
import Portfolio from './Pages/Portfolio'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import NavLink from 'react-bootstrap/NavLink';
import NavItem from 'react-bootstrap/NavItem';
import Container from 'react-bootstrap/Container'

import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Super Interesting.</Navbar.Brand>
          
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav justify variant="tabs">
              <NavItem>
                <NavLink eventKey='1' href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink eventKey='2' href="/About">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink eventKey='3' href='/Portfolio'>Portfolio</NavLink>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/About" element={<About />}>
        </Route>
        <Route path="/Portfolio" element={<Portfolio />}>
        </Route>
      </Routes>
    </Router>
  );
}
