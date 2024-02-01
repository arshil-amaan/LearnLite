import React from "react";
import style from './Content.module.css';
import d from "../../images/Screenshot 2023-12-03 160036.png"
import da from "../../images/Screenshot 2023-12-03 160228.png"
import dat from "../../images/Screenshot 2023-12-03 160532.png"
import c from "../../images/Screenshot 2023-12-03 160805.png"
import cs from "../../images/Screenshot 2023-12-03 161035.png"
import col from "../../images/Screenshot 2023-12-03 161209.png"
import q from "../../images/Screenshot 2023-12-03 161343.png"
import w from "../../images/Screenshot 2023-12-03 161501.png"
import e from "../../images/Screenshot 2023-12-03 161701.png"
import r from "../../images/Screenshot 2023-12-03 161840.png"
import t from "../../images/Screenshot 2023-12-03 162015.png"
import y from "../../images/Screenshot 2023-12-03 162144.png"
import u from "../../images/Screenshot 2023-12-03 162304.png"
import i from "../../images/Screenshot 2023-12-03 162411.png"
import o from "../../images/Screenshot 2023-12-03 162538.png"
import p from "../../images/Screenshot 2023-12-03 163046.png"
import a from "../../images/Screenshot 2023-12-03 163245.png"
import s from "../../images/Screenshot 2023-12-03 163431.png"
import f from "../../images/Screenshot 2023-12-03 163612.png"
import g from "../../images/Screenshot 2023-12-03 163833.png"
import h from "../../images/Screenshot 2023-12-03 164006.png"
import j from "../../images/Screenshot 2023-12-03 164217.png"
import k from "../../images/Screenshot 2023-12-03 164417.png"
import l from "../../images/Screenshot 2023-12-03 164554.png"
import z from "../../images/Screenshot 2023-12-03 164801.png"
import x from "../../images/Screenshot 2023-12-03 164944.png"
import cv from "../../images/Screenshot 2023-12-03 165225.png"
import v from "../../images/Screenshot 2023-12-03 165411.png"
import bn from "../../images/Screenshot 2023-12-03 165528.png"
import Navbar from "../Navbar/Navbar";
import Footer from '../Footer/Footer';
const Content = () => {
    return (
        <>
            <Navbar isLoggedIn='true' />
            <h1>MySQL</h1>
            <img src={d} alt="Database" />
            <img src={da} alt="database" />
            <img src={dat} alt="data" />
            <img src={c} alt="comments" />
            <img src={cs} alt="comments" />
            <img src={col} alt="columns" />
            <img src={q} alt="commands" />
            <img src={w} alt="select commands" />
            <img src={e} alt="keywords" />
            <img src={r} alt="col" />
            <img src={t} alt="column tables" />
            <img src={y} alt="null values" />
            <img src={u} alt="constraints" />
            <img src={i} alt="keys" />
            <img src={o} alt="deleting commands" />
            <img src={p} alt="ordering records" />
            <img src={a} alt="grouping results" />
            <img src={s} alt="altering tables" />
            <img src={f} alt="dropping table" />
            <img src={g} alt="table" />
            <img src={h} alt="cases" />
            <img src={j} alt="numeric functions" />
            <img src={k} alt="functions" />
            <img src={l} alt="time functions" />
            <img src={z} alt="date functions" />
            <img src={x} alt="functions" />
            <img src={cv} alt="more functions" />
            <img src={v} alt="other functions" />
            <img src={bn} alt="joins" />
            <Footer />
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