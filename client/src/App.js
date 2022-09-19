import React, { Fragment } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import './App.css';

const App = () => (
  <BrowserRouter>
  <Routes>
    <Fragment>
      {/* <Route exact path="/" component={Navbar} /> */}
      <Route exact path="/" element={<Landing/>} />
        {/* <Route path="/register" element={Register} />
        <Route path="/login" element={Login} /> */}
    </Fragment>
  </Routes>
  </BrowserRouter>
);

export default App;
