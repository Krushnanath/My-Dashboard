import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Login from './components/Login';
import './App.css';
import React from 'react';
import Header from './components/Header';
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar1 from './components/Navbar1';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Funzone from './components/Funzone';



function App() {
  return (
    <Router>
    <>
    <Navbar1 />
    <div className='header'>
    
    <Header islogin={true}/>
    </div>
    <div className='container1'>
    <div >
    
    </div>
    <div className='item1'>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/funzone" element={<Funzone />} />
      </Routes>
    </div>
    </div>
    <Footer />
    
    
    </>
    </Router>
  );
}

export default App;
