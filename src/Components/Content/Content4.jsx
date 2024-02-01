import React from "react";
import style from './Content.module.css';
import b from "../../images/Screenshot 2023-12-03 144829.png"
import d from "../../images/Screenshot 2023-12-03 145125.png"
import i from "../../images/Screenshot 2023-12-03 145408.png"
import e from "../../images/Screenshot 2023-12-03 145529.png"
import o from "../../images/Screenshot 2023-12-03 145712.png"
import q from "../../images/Screenshot 2023-12-03 145916.png"
import m from "../../images/Screenshot 2023-12-03 150258.png"
import c from "../../images/Screenshot 2023-12-03 150432.png"
import s from "../../images/Screenshot 2023-12-03 150602.png"
import ma from "../../images/Screenshot 2023-12-03 150736.png"
import ms from "../../images/Screenshot 2023-12-03 150922.png"
import de from "../../images/Screenshot 2023-12-03 151207.png"
import fi from "../../images/Screenshot 2023-12-03 151452.png"
import sw from "../../images/Screenshot 2023-12-03 151926.png"
import si from "../../images/Screenshot 2023-12-03 152038.png"
import it from "../../images/Screenshot 2023-12-03 152249.png"
import sb from "../../images/Screenshot 2023-12-03 152450.png"
import p from "../../images/Screenshot 2023-12-03 152718.png"
import f from "../../images/Screenshot 2023-12-03 152834.png"
import co from "../../images/Screenshot 2023-12-03 152955.png"
import con from "../../images/Screenshot 2023-12-03 153200.png"
import ex from "../../images/Screenshot 2023-12-03 153351.png"
import exx from "../../images/Screenshot 2023-12-03 153536.png"
import fil from "../../images/Screenshot 2023-12-03 154013.png"
import rf from "../../images/Screenshot 2023-12-03 154204.png"
import bi from "../../images/Screenshot 2023-12-03 154442.png"
import a from "../../images/Screenshot 2023-12-03 154724.png"
import eh from "../../images/Screenshot 2023-12-03 154904.png"
import ep from "../../images/Screenshot 2023-12-03 155037.png"
import Navbar from "../Navbar/Navbar";
const Content = () => {
    return (
        <>
            <Navbar isLoggedIn='true' />
            <h1>C++</h1>
            <img src={b} alt="Basics of C++" />
            <img src={d} alt="Data types" />
            <img src={i} alt="Other data types" />
            <img src={e} alt="Escape sequence" />
            <img src={o} alt="Other sequences" />
            <img src={q} alt="more sequences" />
            <img src={m} alt="sequences" />
            <img src={c} alt="comments" />
            <img src={s} alt="Strings" />
            <img src={ma} alt="Maths" />
            <img src={ms} alt="others" />
            <img src={de} alt="decision-making" />
            <img src={fi} alt="conditional" />
            <img src={sw} alt="switch" />
            <img src={si} alt="switch statement" />
            <img src={it} alt="iterative statements" />
            <img src={sb} alt="statements" />
            <img src={p} alt="Pointers" />
            <img src={f} alt="Function" />
            <img src={co} alt="constructers" />
            <img src={con} alt="examples" />
            <img src={ex} alt="program" />
            <img src={exx} alt="program" />
            <img src={fil} alt="File Handling" />
            <img dsrc={rf} alt="reading a file" />
            <img src={bi} alt="handling" />
            <img src={a} alt="handling" />
            <img src={eh} alt="Exception handling" />
            <img src={ep} alt="Exception handling code" />
            {/* <div className={style["content-container"]}>
            <h1 className={style.head1}>Ready. Set. Learn...</h1><br />
            <div className={style["container"]}>
                <div className={style["window"]}>
                    <div className={style["window-title"]}>
                        <p>Console Window</p>
                        <div className={style["window-buttons"]}>
                            <div className={`${style["window-button"]} ${style.fullscreen}`}></div>
                            <div className={`${style["window-button"]} ${style.reduce}`}></div>
                            <div className={`${style["window-button"]} ${style.close}`}></div>
                        </div>
                    </div>
                    <div className={style.console}>
                        <pre><code>def main():<br />
                            &nbsp; for i in range(100):<br />
                            &nbsp; &nbsp; print(f"Add to favorites i")<br />
                            &nbsp; &nbsp; if favorite = true:<br />
                            &nbsp; &nbsp; &nbsp; Favorite()<br />

                            def Favorite():<br />
                            &nbsp; print("thanks")<br />

                            main()</code></pre>
                    </div>
                </div>
            </div>
        </div> */}
        </>
    )
}


export default Content;