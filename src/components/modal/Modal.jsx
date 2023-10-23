import React from "react";
import Styles from "./index.module.scss";

function Modal({ closeModal, data }) {
  const closeBtn = () => {
    closeModal();
  };

  const overlayCloseHandler = () => {
    closeModal();
  };

  const videoId = data && data.results && data.results.length > 0 ? `https://www.youtube.com/watch?v=${data.results[0].key}` : "";

  return (
    <>
      <div className={Styles.main}>
        <div onClick={overlayCloseHandler} className={Styles.main__overlay}></div>
        <div className={Styles.main__container}>
          <div className={Styles.main__container__content}>
            <button onClick={closeBtn}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            <div className={Styles.main__container__content__youtube}>
              {videoId ? (
                <iframe src={`https://www.youtube.com/embed/${data.results[0].key}`} title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
              ) : (
                <div className={Styles.main__container__content__youtube__error}>
                  <p>No Video found in Database</p>
                  <i className="fa-regular fa-face-frown"></i>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
