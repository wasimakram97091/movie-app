import React from "react";
import Styles from "./index.module.scss";

import { useNavigate } from "react-router-dom";

function SignUpSuccess() {
  const navigate = useNavigate();
  const backToLogin = () => {
    navigate("/");
  };
  return (
    <>
      <div className={Styles.main}>
        <div className={Styles.main__container}>
          <div className={Styles.main__container__content}>
            <p>Accout created !!</p>
            <button onClick={backToLogin}>
              <i className="fa-solid fa-arrow-left"></i> Back To Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpSuccess;
