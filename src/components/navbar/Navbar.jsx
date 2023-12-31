import React, { useEffect, useState } from "react";
import Styles from "./index.module.scss";
import SearchBar from "../searchBar/SearchBar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchData } from "../../features/counter/searchSlice";
import { userloggedOut } from "../../features/counter/authSlice";
import logo from "../../images/cine1.png";

function Navbar() {
  const dispatch = useDispatch();
  const [searchBar, setSearchBar] = useState(false);
  const navigate = useNavigate();
  const [isSticky, setIsSticky] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const getDataFromStore = useSelector((state) => state.searchData.data);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const toggleSearchBar = () => {
    setSearchBar(!searchBar);
  };

  const movieHandler = () => {
    navigate("/movies");
  };

  const homeHandler = () => {
    navigate("/home");
  };
  const tvShowsHandler = () => {
    navigate("/tvShows");
  };

  const callbackHandler = (value) => {
    dispatch(fetchSearchData(value));
    if (getDataFromStore) {
      setSearchValue(searchValue);
    }
  };

  const handleToLogout = () => {
    dispatch(userloggedOut());
    window.localStorage.removeItem("isAuthenticate");
    navigate("/");
  };

  return (
    <>
      <div className={`${Styles.main} ${isSticky ? Styles.sticky : ""}`}>
        <div className={Styles.main__container}>
          <div className={Styles.main__container__navbar}>
            <div className={Styles.main__container__navbar__logo}>
              <h2 onClick={homeHandler}>
                <img src={logo} alt="Logo" />
              </h2>
            </div>
            <div className={Styles.main__container__navbar__link}>
              {<p onClick={movieHandler}>Movie</p>}
              <p onClick={tvShowsHandler}>TV</p>
              <div className={Styles.main__container__navbar__icon} onClick={toggleSearchBar}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
              <div className={Styles.main__container__navbar__logout} onClick={handleToLogout}>
                <i className="fa-solid fa-right-from-bracket"></i>
              </div>
            </div>
          </div>
        </div>
        {searchBar && <SearchBar searchBarHandlerOnIcon={toggleSearchBar} callbackHandler={callbackHandler} />}
      </div>
    </>
  );
}

export default Navbar;
