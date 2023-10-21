import "./App.css";
import DeatilsLanding from "./components/detailsLandingPage/DeatilsLanding";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import MovieList from "./components/movieList/MovieList";
import TvList from "./components/tvList/TvList";
import SearchData from "./components/searchData/SearchData";
import LoginPage from "./components/loginPage/LoginPage";
import SignUpPage from "./components/SingUp/SignUpPage";
import LoginError from "./components/loginErrors/LoginError";
import SignUpSuccess from "./components/signUpSuccess/SignUpSuccess";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signUp" element={<SignUpPage />} />
      <Route path="/error" element={<LoginError />} />
      <Route path="/success" element={<SignUpSuccess />} />

      {isAuthenticated || window.localStorage.getItem("isAuthenticate") ? (
        <>
          <Route path="/home" element={<LandingPage />} />
          <Route path="/details/:id" element={<DeatilsLanding />} />
          <Route path="/movies" element={<MovieList />} />
          <Route path="/tvShows" element={<TvList />} />
          <Route path="search" element={<SearchData />} />
        </>
      ) : null}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
