import React, { useCallback } from "react";
import { Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";
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
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";


function App() {

let location = useLocation();
const navigate = useNavigate();

const [loggedIn, setLoggedIn] = React.useState(false);
// const [userEmail, setUserEmail] = React.useState("");
// const [userName, setUserName] = React.useState("");
const [currentUser, setCurrentUser] = React.useState({});

React.useEffect(() => {
  checkToken();
}, []);

function handleLogin() {
  setLoggedIn(true);
}

function checkToken() {
  const path = location.pathname

 MainApi.jwt()
      .then((data) => {
        setLoggedIn(true);
        navigate(path)
      })
      .catch((err) => {
        console.log(err);
      });
}

React.useEffect(() => {
  if (loggedIn) {
    MainApi
      .getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}, [loggedIn]);



  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Routes>

        <Route path="/" element={
        <ProtectedRoute element={Main} />} />
        <Route path="/movies" element={<ProtectedRoute element={Movies} loggedIn={loggedIn}/>} />
        <Route path="/saved-movies" element={<ProtectedRoute element={SavedMovies} loggedIn={loggedIn}/>} />
        <Route path="/profile" element={<ProtectedRoute element={Profile} loggedIn={loggedIn}/>} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login handleLogin={handleLogin} />} />
        <Route
              path="*"
              element={<NotFound />
              }
            />

      </Routes>
      <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
