import React from 'react'
import studyGroup from '../../images/Landing-right.gif';
import style from './Hero.module.css';
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div>
            <section className={style["land-section"]}>
                <div className={style.sailge}>
                    <h1 className={style.heading}>Learn, Grow, Succeed</h1>
                    <Link to='/signup'><button className={style.btn}>
                        Start Learning
                    </button></Link>
                </div>
                <div className={style.rightImg}>
                    <img style={{borderRadius:"5px 40px 5px 40px"}} src={studyGroup} alt='kl'/>
                </div>
            </section>
        </div>
    )
}

export default Hero
