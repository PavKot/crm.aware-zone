import React, { useEffect } from "react";
import "./LoginWrapper.css";
import logoBig from "../../Images/logoBig.png";
import axios from "axios";
import { useState } from "react";
import qs from "qs";
import { Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const notifySuccess = () =>
  toast.success("🦄 Wow so easy!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
const notifyError = () =>
  toast.error("Вхід неуспішний!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

const LoginWrapper = () => {
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      setAuthStatus("success");
    } else {
      setAuthStatus("error");
    }
  }, []);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [authStatus, setAuthStatus] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    axios
      .post(
        process.env.REACT_APP_API_EMAIL_URL + "/login",
        qs.stringify(formData),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        if (response.data.error === "Wrong password") {
          console.log("Wrong password");
          notifyError();
        } else if (response.data.error === "Wrong username") {
          console.log("Wrong username");
          alert("Wrong username");
          notifyError();
        } else {
          console.log("Logged in");
          setAuthStatus("success");
          notifySuccess();
          window.localStorage.setItem("token", response.data.token);
        }
      })
      .catch((error) => {
        console.error("Error logging in:", error);
        setAuthStatus("error");
      });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <ToastContainer />
      <div className="login-wrapper">
        {authStatus === "success" ? <Navigate to={"/"} /> : ""}
        <div className="login-wrapper-content">
          <div className="login-wrapper-content-header">
            <h1>Вхід</h1>
            <img src={logoBig} alt="logoBig" />
          </div>
          <div className="login-wrapper-content-form">
            <div className="login-wrapper-content-form-item">
              <label htmlFor="username">Логін</label>
              <input
                type="text"
                name="username"
                id="username"
                onChange={handleInputChange}
              />
            </div>
            <div className="login-wrapper-content-form-item">
              <label htmlFor="password">Пароль</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={handleInputChange}
              />
            </div>
            <button onClick={handleLogin}>Увійти</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginWrapper;
