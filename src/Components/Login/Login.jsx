import React, { useState } from "react";
import style from './Login.module.css';
import Header from "../Navbar/Navbar";
import Footer from '../Footer/Footer';
import { Link, useNavigate } from "react-router-dom";
import apiConnector from "../../Axios/allAPIs";
import { toast } from "react-toastify";

const Login = () => {
  let navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const onLogin = async (event, props) => {
    event.preventDefault();
    try {
      const request = await apiConnector.post("/api/v1/login", {
        "email": props.userEmail,
        "password": props.userPassword
      }, {
        withCredentials: true
      });

      if (!request.data.success) {
        throw new Error("data not found");
      }
      toast.success("Login Successful");
      console.log(request.data);
      navigate("/dashboard");
    } catch (error) {
      toast.error("Login Failed");
      console.log("Error is " + error)
      // throw new error(error);
    }
  }
  return (
    <>
      <Header />
      <div className={style.formContainer}>
        <div className={style['form-container']}>
          <p className={style.title}>Login Page</p>
          <p className={style['sub-title']}>Welcome</p>
          <form className={style.form}>
            <input type="email" value={userEmail} onChange={(event) => setUserEmail(event.target.value)} className={style.input} placeholder="Email" />
            <input type="password" value={userPassword} onChange={(event) => setUserPassword(event.target.value)} className={style.input} placeholder="Password" />
            <button onClick={(event) => onLogin(event, { userEmail: userEmail, userPassword: userPassword })} className={style['form-btn']}>Login</button>
          </form>
          <p className={style['sign-up-label']}>
            Not a User? <Link to="/signup"><span className={style['sign-up-link']}>Register</span></Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Login;