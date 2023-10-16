import React from "react";
import Styles from "./index.module.scss";

function Banner() {
  return (
    <>
      <div className={Styles.main}>
        <div className={Styles.main__container}>
          <h2>Welcome</h2>
          <p>Millions of movies, TV shows and people to discover. Explore now.</p>
        </div>
      </div>
    </>
  );
}

export default Banner;
