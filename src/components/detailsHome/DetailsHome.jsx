import React, { useEffect, useState } from "react";
import Styles from "./index.module.scss";
import { fetchDetailsData } from "../../features/counter/detailsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Modal from "../modal/Modal";

function DetailsHome() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.detailsData.data);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    dispatch(fetchDetailsData(id));
  }, [id]);

  const img_url = data?.backdrop_path;
  const baseImgUrl = img_url ? `https://image.tmdb.org/t/p/original/${img_url}` : "";
  const backgroundImageUrl = baseImgUrl;
  const divStyle = {
    backgroundImage: backgroundImageUrl ? `url(${backgroundImageUrl})` : "",
    backgroundSize: "cover",
    width: "100%",
  };
  const posterUrl = data.poster_path ? `https://image.tmdb.org/t/p/original/${data.poster_path}` : "";

  const modalHandler = (item) => {
    setModal(true);
  };

  const onCloseModal = () => {
    setModal(false);
  };
  return (
    <>
      <div className={Styles.main} style={divStyle}>
        <div className={Styles.main__container}>
          <div className={Styles.main__container__content}>
            <div className={Styles.main__container__content__img}>
              <img src={posterUrl} alt="Moive Banner" />
            </div>
            <div className={Styles.main__container__content__details}>
              <h2>{data.title}</h2>
              <p>{data.tagline}</p>
              <div className={Styles.main__container__content__details__genre}>
                <p>
                  {data?.genres?.map((item) => (
                    <span> {item.name} </span>
                  ))}
                </p>
              </div>
              <div className={Styles.main__container__content__details__watch}>
                <h2>
                  {Math.ceil(data.vote_average)} <i className="fa-solid fa-star"></i>
                </h2>
                <button
                  onClick={() => {
                    modalHandler(data);
                  }}
                >
                  <i className="fa-solid fa-play"></i> Watch Trailer
                </button>
              </div>
              {modal && <Modal closeModal={onCloseModal} />}
              <h4>Overview</h4>
              <div className={Styles.main__container__content__details__overview}>
                <p>{data.overview}</p>
              </div>
              <ul className={Styles.main__container__content__details__ul}>
                <li className={Styles.main__container__content__details__ul__li}>
                  <div className={Styles.main__container__content__details__ul__li__div}>
                    Status : <span>{data.status}</span> Release Date : <span>{data.release_date}</span>
                  </div>
                </li>
                <li className={Styles.main__container__content__details__ul__li}>
                  <div className={Styles.main__container__content__details__ul__li__div}>
                    Runtime : <span>{data.runtime} min</span>
                  </div>
                </li>
                <li className={Styles.main__container__content__details__ul__li}>
                  <div className={Styles.main__container__content__details__ul__li__div}>
                    Language : <span>{data.original_language}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailsHome;
