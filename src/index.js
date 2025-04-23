import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import Navbar from './components/navLink/Navbar';
import Contact from './page/Contact';
import Project from './page/Project';
import { ThemeProvider } from './Context/ThemeContext';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider>
    <Navbar />
    <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/about' element = {<About />} />
      <Route path='/contact' element = {<Contact />} />
      <Route path='/project' element = {<Project />} />
    </Routes>
    </ThemeProvider>
    </BrowserRouter>
   
  </React.StrictMode>
);
reportWebVitals();
