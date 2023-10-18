import React from "react";
import Styles from "./index.module.scss";
import { Link } from "react-router-dom";

function MovieCard({ topRated_tv_original_name, topRated_tv_backgroundImageUrl, topRated_tv_first_air_date, topRated_tv_rating, chipId, genreIdVSName = {}, id }) {
  const topRated_tv_name = topRated_tv_original_name ? topRated_tv_original_name : "";
  const baseImgUrl = topRated_tv_backgroundImageUrl ? `https://image.tmdb.org/t/p/original/${topRated_tv_backgroundImageUrl}` : "";

  return (
    <>
      <div className={Styles.main}>
        <div className={Styles.main__container}>
          <div className={Styles.main__container__content}>
            <Link to={`/details/${id}`}>
              <div className={Styles.main__container__content__card}>
                <div className={Styles.main__container__content__card__img}>
                  <img src={baseImgUrl} alt="Movie Thumbnail" />
                </div>

                <div className={Styles.main__container__content__card__types}>
                  {chipId && Array.isArray(chipId) && chipId.map((item) => genreIdVSName.has(item.toString()) && <p key={item}>{genreIdVSName.get(item.toString())}</p>)}
                </div>
                <div className={Styles.main__container__content__card__rating}>
                  <p>
                    {Math.ceil(topRated_tv_rating)}
                    <span>
                      <i className="fa-solid fa-star"></i>
                    </span>
                  </p>
                </div>
                <div className={Styles.main__container__content__card__name}>
                  <h2>{topRated_tv_name} </h2>
                  <p> Release date : {topRated_tv_first_air_date} </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
