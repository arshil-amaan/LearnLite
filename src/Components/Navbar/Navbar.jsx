import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../images/LearnLite.svg';
import style from './Navbar.module.css';

const Navbar = (props) => {
  return (
    <header className={style.container}>
      <Link to='/'><div className={style.txt}>
        <img src={Logo} alt="Logo" className={style.image} />
      </div></Link>
      <nav className={style.txt}>
        {/* {!props.isLoggedIn && <button onClick={() => window.open('http://www.google.com')} className={style['my-button']}>Log in</button>} */}
        {!props.isLoggedIn && <Link to='/login'><button className={style['my-button']}>Log in</button></Link>}
        {props.isLoggedIn && <Link to='/'><button className={style['my-button']}>Log out</button></Link>}
        {!props.isLoggedIn && <Link to='/signup'><button className={style['my-button']}>Sign Up</button></Link>}
        {props.isLoggedIn && <Link to='/dashboard'><button className={style['my-button']}>My Profile</button></Link>}
      </nav>
    </header>
  )
}

export default Navbar;