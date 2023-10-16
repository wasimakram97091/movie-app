import React from "react";
import Styles from "./index.module.scss";

function Footer() {
  return (
    <div className={Styles.main}>
      <div className={Styles.main__container}>
        <div className={Styles.main__container__content}>
          <div className={Styles.main__container__content__list}>
            <p>Terms Of Use</p>
            <p>Privacy-Policy</p>
            <p>About</p>
            <p>Blog</p>
            <p>FAQ</p>
          </div>
          <div className={Styles.main__container__content__para}>
            <p>
              This movie app is a user-friendly, responsive platform designed for movie enthusiasts. It provides real-time access to trending movies and TV shows. The app fetches
              data from APIs to display details such as titles, release dates, ratings, and genres. Users can easily toggle between TV shows and movies to explore a diverse range
              of content.
            </p>
          </div>
          <div className={Styles.main__container__content__icon}>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fa-brands fa-linkedin-in"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
