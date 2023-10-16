import React, { useState } from "react";
import Styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";

function SearchBar({ searchBarHandlerOnIcon, callbackHandler }) {
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  const inputChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  const keyPressHandler = (event) => {
    callbackHandler(value);
    if (event.key === "Enter") {
      event.preventDefault();
      navigate("/search");
    }
  };

  return (
    <>
      <div className={Styles.main}>
        <div className={Styles.main__container}>
          <input placeholder="Search Movie or TV Shows..." type="text" value={value} onKeyPress={keyPressHandler} onChange={inputChange} />
          <i className="fa-solid fa-xmark" onClick={searchBarHandlerOnIcon}></i>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
