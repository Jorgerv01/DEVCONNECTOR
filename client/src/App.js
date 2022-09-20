import React, { Fragment } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import './App.css';
import LandingNavbar from './components/layout/LandingNavbar';

const App = () => (
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Fragment>
      
      <Route exact path="/" element={<LandingNavbar />} />
      {/* <Route exact path="/" element={<Landing />} /> */}
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
    </Fragment>
  </Routes>
  </BrowserRouter>
);

export default App;
