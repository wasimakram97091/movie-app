import React, { useState } from "react";
import Styles from "./index.module.scss";

function Heading({ TopRatedHaed, TopRatedTvBtn, TopRatedMovieBtn, onToggle }) {
  const [activeButton, setActiveButton] = useState("TV");

  const handleButtonClick = (option) => {
    setActiveButton(option);
    onToggle(option);
  };

  return (
    <div className={Styles.main}>
      <div className={Styles.main__container}>
        <div className={Styles.main__container__content}>
          <div className={Styles.main__container__content__head}>
            <h2>{TopRatedHaed}</h2>
          </div>
          <div className={Styles.main__container__content__btn}>
            <p>
              <span onClick={() => handleButtonClick("TV")} className={activeButton === "TV" ? Styles.activeButton : ""}>
                {TopRatedTvBtn}
              </span>
              <span onClick={() => handleButtonClick("Movie")} className={activeButton === "Movie" ? Styles.activeButton : ""}>
                {TopRatedMovieBtn}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heading;
