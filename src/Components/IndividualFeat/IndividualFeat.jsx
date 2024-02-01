import React from 'react'
import { Link } from 'react-router-dom';
import style from './IndividualFeat.module.css';

const IndividualFeat = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <div className={style["txt-area"]}>
                    <h2 className={style["heading-2"]}>
                        Learn at Your Own Pace
                    </h2>
                    <p className={style.para}>
                        Take control of your learning journey with flexible scheduling
                        and self-paced courses.
                    </p>
                    <Link to='/signup'><button className={style.btn}>
                        Start Learning
                    </button></Link>
                </div>
                <div className={style['img-container']}>
                    <img
                        src="https://source.unsplash.com/featured/1080x720/?learning"
                        alt="Learning"
                        className={style.pic}
                    />
                </div>
            </div>

            {/* Individual Feature Section 2 */}
            <div className={style.container}>
                <div className={style['img-container']}>
                    <img
                        src="https://source.unsplash.com/featured/1080x720/?online-education"
                        alt="Online Education"
                        className={style.pic}
                    />
                </div>
                <div className={style["txt-area"]}>
                    <h2 className={style["heading-2"]}>
                        Interactive Learning Experience
                    </h2>
                    <p className={style.para}>
                        Engage with live quizzes, discussion boards, and interactive
                        learning materials.
                    </p>
                    <Link to='/signup'><button className={style.btn}>
                        Start Learning
                    </button></Link>
                </div>
            </div>
        </div>
    )
}

export default IndividualFeat
