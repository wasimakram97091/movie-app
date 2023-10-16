import React, { useState } from "react";
import Styles from "./index.module.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userSignUp } from "../../features/counter/authSlice";

function LoginPage() {
  const [signUpUserData, setSignUpUserData] = useState({ name: "", email: "", password: "" });
  const [signUpError, setSignUPError] = useState({ nameError: "", emailError: "", passwordError: "" });
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleValidation = () => {
    const errors = {};

    if (signUpUserData.name.length < 4) {
      errors.nameError = "Name must be at least 4 characters*";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(signUpUserData.email)) {
      errors.emailError = "Invalid email address*";
    }

    if (signUpUserData.password.length < 5) {
      errors.passwordError = "Password must be at least 5 characters*";
    }

    setSignUPError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSignUp = () => {
    if (handleValidation()) {
      const userData = [
        {
          name: signUpUserData.name,
          email: signUpUserData.email,
          password: signUpUserData.password,
        },
      ];

      let existUsers = JSON.parse(localStorage.getItem("user"));
      if (existUsers) {
        let updatedUser = [...existUsers, ...userData];
        localStorage.setItem("user", JSON.stringify(updatedUser));
        dispatch(userSignUp(existUsers));
      } else {
        dispatch(userSignUp(userData));
        localStorage.setItem("user", JSON.stringify(userData));
      }
      navigate("/success");
    }
  };

  const backToSign = () => {
    navigate("/");
  };
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className={Styles.main}>
        <div className={Styles.main__container}>
          <div className={Styles.main__container__content}>
            <h2>Sign Up</h2>
            <div className={Styles.main__container__content__form}>
              <input placeholder="Name" type="text" value={signUpUserData.name} onChange={(e) => setSignUpUserData({ ...signUpUserData, name: e.target.value })} />
              {signUpError.nameError && <p className={Styles.error}>{signUpError.nameError}</p>}
              <input placeholder="Email" type="email" value={signUpUserData.email} onChange={(e) => setSignUpUserData({ ...signUpUserData, email: e.target.value })} />
              {signUpError.emailError && <p className={Styles.error}>{signUpError.emailError}</p>}
              <div className={Styles.main__container__content__form__password}>
                <input
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  value={signUpUserData.password}
                  onChange={(e) => setSignUpUserData({ ...signUpUserData, password: e.target.value })}
                />
                <button onClick={toggleShowPassword}> {!showPassword ? <i className="fa-regular fa-eye"></i> : <i className="fa-regular fa-eye-slash"></i>} </button>
                {signUpError.passwordError && <p className={Styles.error}>{signUpError.passwordError}</p>}
              </div>
              <button onClick={handleSignUp}>Sing Up</button>
              <div className={Styles.main__container__content__form__para}>
                <p>
                  Already have an Account ? <span onClick={backToSign}>Sign In</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
