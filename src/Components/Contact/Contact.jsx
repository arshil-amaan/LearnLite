import React from "react";

import style from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={style.sec}>
      <h2 className={style.heading}>Contact Us</h2>
      <form>
        <div className={style.main}>
          <input
            type="text"
            className={style['my-input']}
            placeholder="Your Name"
            required=""
          />
          <input
            type="email"
            className={style['my-input']}
            placeholder="Your Email"
            required=""
          />
        </div>
        <div className={style['msg-area']}>
          <textarea
            className={style['my-textarea']}
            rows={5}
            placeholder="Your Message"
            required=""
            defaultValue={""}
          />
        </div>
        <div className={style['msg-btn']}>
          <button
            type="submit"
            className={style['my-button']}
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
