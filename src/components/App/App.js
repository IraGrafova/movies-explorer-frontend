import React from "react";
import {
  Routes,
  Route,
  useNavigate,
  Navigate,
  useLocation,
} from "react-router-dom";
import "./App.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import * as MainApi from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  let location = useLocation();
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    checkToken();
  }, []);

  function handleLogin() {
    setLoggedIn(true);
  }

  function checkToken() {
    const path = location.pathname;

    MainApi.jwt()
      .then(() => {
        setLoggedIn(true);
        navigate(path, {replace:true});
      })
      .catch((err) => {
        console.log(err);
      });
  }

  React.useEffect(() => {
    if (loggedIn) {
      MainApi.getUserInfo()
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
        <Header loggedIn={loggedIn}/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/movies"
            element={<ProtectedRoute element={Movies} loggedIn={loggedIn} />}
          />
          <Route
            path="/saved-movies"
            element={<ProtectedRoute element={Movies} loggedIn={loggedIn} />}
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                element={Profile}
                setCurrentUser={setCurrentUser}
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
              />
            }
          />
         <Route path="/signup" element={
          loggedIn ? (<Navigate to={'/'} replace/>) :
          (<Register handleLogin={handleLogin}/>)} />
          <Route path="/signin" element={
          loggedIn ? (<Navigate to={'/'} replace/>) :
          (<Login handleLogin={handleLogin}/>)} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
