import React, { useState } from "react";
import Styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";

function InputSearch({ callBackHandler }) {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const inputChange = (e) => {
    const { value } = e.target;

    setValue(value);
  };
  const searchHandler = () => {
    callBackHandler(value);
    navigate("/search");
  };

  const keyPressHandler = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      callBackHandler(value);
      navigate("/search");
    }
  };
  return (
    <>
      <div className={Styles.main}>
        <div className={Styles.main__container}>
          <div className={Styles.main__container__content}>
            <input placeholder="Search Movie and TV Shows..." type="text" onChange={inputChange} value={value} onKeyPress={keyPressHandler} />
            <button onClick={searchHandler}>Search</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default InputSearch;
