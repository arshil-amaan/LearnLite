import React from 'react'
import style from './ConsWind.module.css'

export const ConsWind = (props) => {
    return (
        <>
            <div className={style["content-container"]}>
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
                                &nbsp;{props.codeHere}
                                &nbsp; print("thanks")<br />

                                main()</code></pre>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
