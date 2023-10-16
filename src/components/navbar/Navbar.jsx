import React, { useEffect, useState } from "react";
import Styles from "./index.module.scss";
import SearchBar from "../searchBar/SearchBar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchData } from "../../features/counter/searchSlice";

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
    navigate("/");
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

  return (
    <>
      <div className={`${Styles.main} ${isSticky ? Styles.sticky : ""}`}>
        <div className={Styles.main__container}>
          <div className={Styles.main__container__navbar}>
            <div className={Styles.main__container__navbar__logo}>
              <h2 onClick={homeHandler}>
                <img src="https://www.sundirect.in/Content/Uploads/Blocks/636928233543372120_cineplex-hd.png" alt="Logo" />
              </h2>
            </div>
            <div className={Styles.main__container__navbar__link}>
              {<p onClick={movieHandler}>Movie</p>}
              <p onClick={tvShowsHandler}>TV Shows</p>
              <div className={Styles.main__container__navbar__icon} onClick={toggleSearchBar}>
                <i className="fa-solid fa-magnifying-glass"></i>
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
