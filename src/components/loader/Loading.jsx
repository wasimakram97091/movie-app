import React from "react";
import Styles from "./index.module.scss";

function Loading() {
  return (
    <>
      <div className={Styles.loaderDiv}>
        <span className={Styles.loaderDiv__loader}></span>
      </div>
    </>
  );
}

export default Loading;
