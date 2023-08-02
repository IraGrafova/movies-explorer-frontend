import React from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import "./App.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
      <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
