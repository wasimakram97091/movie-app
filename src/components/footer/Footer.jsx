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
            <a href="https://www.facebook.com/profile.php?id=100007726477374" target="_blank">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://instagram.com/__hey.wasim?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a href=" https://x.com/__________waim?t=y48o-vT5uF7IynY-tzs3-g&s=08" target="_blank">
              <i className="fa-brands fa-x-twitter"></i>
            </a>

            <a href="https://www.linkedin.com/in/wasim-akram-542960289" target="_blank">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      <div className={Styles.main__container__content__text}>
        <p>
          Copyright ©2023 All rights reserved | <i className="fa-solid fa-heart"></i> from{" "}
          <a href="https://my-portfolio-lac-gamma-89.vercel.app/" target="_blank">
            <span>Wasim</span>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
