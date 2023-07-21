import React from "react";
//import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import './App.css';

import Header from "../Header/Header";
import Footer from '../Footer/Footer';
import Main from '../Main/Main';

function App() {

  return (
    <div className="App">
     <Header />
     <Main />
     <Footer />
    </div>
  );
}

export default App;
