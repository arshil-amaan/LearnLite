import React, { useState } from "react";
import style from './Signup.module.css';
import Header from "../Navbar/Navbar";
import Footer from '../Footer/Footer';
import { Link, useNavigate } from "react-router-dom";
import apiConnector from "../../Axios/allAPIs";
import { toast } from "react-toastify";

const Signup = () => {
  let navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const onSignup = async (event, props) => {
    event.preventDefault();
    try {
      const request = await apiConnector.post("/api/v1/signup", {
        "username": props.userName,
        "email": props.userEmail,
        "password": props.userPassword
      })
      if (!request.data.success) {
        throw new Error("data not found");
      }
      toast.success("Signup Successful");
      console.log(request.data);
      navigate("/login");
    } catch (error) {
      toast.error("Signup Failed");
      console.log("Error is " + error)
      // throw new error(error);
    }
  }
  return (
    <>
      <Header />
      <div className={style.formContainer}>
        <div className={style['form-container']}>
          <p className={style.title}>Create account</p>
          <p className={style['sub-title']}>Let's get statred with your 30 days free trial</p>
          <form className={style.form}>
            <input value={userName} onChange={(event) => setUserName(event.target.value)} type="text" className={style.input} placeholder="Name" />
            <input value={userEmail} onChange={(event) => setUserEmail(event.target.value)} type="email" className={style.input} placeholder="Email" />
            <input value={userPassword} onChange={(event) => setUserPassword(event.target.value)} type="password" className={style.input} placeholder="Password" />
            <button onClick={(event) => onSignup(event, { userName: userName, userEmail: userEmail, userPassword: userPassword })} className={style['form-btn']}>Create account</button>
          </form>
          <p className={style['sign-up-label']}>
            Already have an account? <Link to="/login"><span className={style['sign-up-link']}>Log in</span></Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Signup;