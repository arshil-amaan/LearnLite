import React from "react";
import style from './Footer.module.css';

const Footer = () => {
  return (
    <div>
      <footer className={style.sec}>
        <div className={style.container}>
          <ul className={style.list}>
            <li className={style["list-item"]}>
              <i className={`${style['footer-icon']} fa-twitter fab`} onClick={() => window.open('http://www.twitter.com')} />
            </li>
            <li className={style["list-item"]}>
              <i className={`${style['footer-icon']} fa-facebook-f fab`} onClick={() => window.open('http://www.facebook.com')} />
            </li>
            <li className={style["list-item"]}>
              <i className={`${style['footer-icon']} fa-instagram fab`} onClick={() => window.open('http://www.instagram.com')} />
            </li>
          </ul>
          <p className={style.txt}>© 2023 Learn Lite. All rights reserved.</p>
        <div></div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
