import React, { useEffect, useState } from "react";
import Styles from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { userSignUp, userLogin } from "../../features/counter/authSlice";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const allUsers = localStorage.getItem("user");
    if (allUsers) {
      dispatch(userSignUp(JSON.parse(allUsers)));
    } else {
      console.log("user not found");
    }
  }, []);

  const handleToLogin = () => {
    if (!formData.email || !formData.password) {
      setError("Please enter both Email & Password");
      return;
    }

    let existUser = user.find((item) => item.email === formData.email && item.password === formData.password);
    if (existUser) {
      navigate("/home");
    } else {
      navigate("/error");
    }
    window.localStorage.setItem("isAuthenticate", true);
    dispatch(userLogin(user));
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleGoToSingUp = () => {
    navigate("/signUp");
  };
  return (
    <>
      <div className={Styles.main}>
        <div className={Styles.main__container}>
          <div className={Styles.main__container__content}>
            <h2>Login</h2>
            <div className={Styles.main__container__content__form}>
              <input placeholder="Email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              <div className={Styles.main__container__content__form__password}>
                <input
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button onClick={toggleShowPassword}> {!showPassword ? <i className="fa-regular fa-eye"></i> : <i className="fa-regular fa-eye-slash"></i>} </button>
              </div>
              {error && <p className={Styles.error}>{error}</p>}
              <button onClick={handleToLogin}>Login</button>
            </div>
            <p>
              New here? <span onClick={handleGoToSingUp}>Create an Account</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
