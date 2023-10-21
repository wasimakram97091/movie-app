import "./App.css";
import DeatilsLanding from "./components/detailsLandingPage/DeatilsLanding";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import MovieList from "./components/movieList/MovieList";
import TvList from "./components/tvList/TvList";

import SearchData from "./components/searchData/SearchData";
import LoginPage from "./components/loginPage/LoginPage";
import SignUpPage from "./components/SingUp/SignUpPage";
import LoginError from "./components/loginErrors/LoginError";
import SignUpSuccess from "./components/signUpSuccess/SignUpSuccess";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function App() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <>
      <Routes>
        <Route path="/" Component={LoginPage} />

        {isAuthenticated && (
          <>
            <Route exact path="/home" Component={LandingPage} />
            <Route path="/details/:id" Component={DeatilsLanding} />
            <Route path="/movies" Component={MovieList} />
            <Route path="/tvShows" Component={TvList} />
            <Route path="search" Component={SearchData} />
            <Route path="/signUp" Component={SignUpPage} />
            <Route path="/error" Component={LoginError} />
            <Route path="/success" Component={SignUpSuccess} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
