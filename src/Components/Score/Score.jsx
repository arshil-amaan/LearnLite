import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import style from './Score.module.css';

const Score = (props) => {
    let navigate = useNavigate();
    return (
        <div style={{display:"flex",justifyContent:"center"}}>
            <div className={style["results-summary-container"]}>
                <div className={style["confetti"]}>
                    <div className={style["confetti-piece"]} />
                    <div className={style["confetti-piece"]} />
                    <div className={style["confetti-piece"]} />
                    <div className={style["confetti-piece"]} />
                    <div className={style["confetti-piece"]} />
                    <div className={style["confetti-piece"]} />
                    <div className={style["confetti-piece"]} />
                    <div className={style["confetti-piece"]} />
                    <div className={style["confetti-piece"]} />
                    <div className={style["confetti-piece"]} />
                    <div className={style["confetti-piece"]} />
                    <div className={style["confetti-piece"]} />
                    <div className={style["confetti-piece"]} />
                    <div className={style["confetti-piece"]} />
                    <div className={style["confetti-piece"]} />
                    <div className={style["confetti-piece"]} />
                    <div className={style["confetti-piece"]} />
                    <div className={style["confetti-piece"]} />
                    <div className={style["confetti-piece"]} />
                </div>
                <div className={style["results-summary-container__result"]}>
                    <div className={style["heading-tertiary"]}>Your Result</div>
                    <div className={style["result-box"]}>
                        <div className={style["heading-primary"]}>{props.score}</div>
                        <p className={style["result"]}>of 5</p>
                    </div>
                    <div className={style["result-text-box"]}>
                        <div className={style["heading-secondary"]}>finished!!</div>
                        <p className={style["paragraph"]}>
                            You scored higher than 65% of the people who have taken these tests.
                        </p>
                    </div>
                    <div className={style["summary__cta"]}>
                        <button onClick={()=>{navigate("/dashboard")}} className={style["btn"]}>Go to Dashboard</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Score
