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
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { userLogin } from "./features/counter/authSlice";

function App() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.localStorage.getItem("isAuthenticate")) dispatch(userLogin(""));
  }, []);

  return (
    <>
      <Routes>
        {isAuthenticated ? (
          <>
            <Route path="/home" element={<LandingPage />} />
            <Route path="/details/:id" element={<DeatilsLanding />} />
            <Route path="/movies" element={<MovieList />} />
            <Route path="/tvShows" element={<TvList />} />
            <Route path="search" element={<SearchData />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signUp" element={<SignUpPage />} />
            <Route path="/error" element={<LoginError />} />
            <Route path="/success" element={<SignUpSuccess />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
