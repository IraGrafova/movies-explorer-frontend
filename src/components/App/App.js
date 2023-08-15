import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from '../Register/Register';
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import * as MainApi from '../../utils/MainApi';


function App() {
const name='Ирина';
const email='i.grafova@mail.ru';

const navigate = useNavigate();

const [loggedIn, setLoggedIn] = React.useState(false);

function handleLogin() {
  setLoggedIn(true);
}

function checkToken() {

  //const token = localStorage.getItem("token");

 // if (token) {

 MainApi.jwt()
      .then(() => {
        handleLogin();
        navigate("/movies");
      })
      .catch((err) => {
        console.log(err);
      });
 // }
}

React.useEffect(() => {
  checkToken();
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

  return (
    <div className="app">
      <Header />
      <Routes>
      <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile name={name} email={email}/>} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login handleLogin={handleLogin} />} />
        <Route
              path="*"
              element={<NotFound />
              }
            />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
