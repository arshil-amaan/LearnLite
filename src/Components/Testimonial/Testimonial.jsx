import React from 'react'
import style from './Testimonial.module.css';

const Testimonial = () => {
    return (
        <section className={style.sec}>
            <h2>
                What Our Students Say
            </h2>
            <div className={style.wrapper}>
                <div className={style.card}>
                    <i className="fas fa-quote-left fa-2x mb-4" />
                    <p className={style.caption}>
                        I would like to extend my heartfelt appreciation for your invaluable assistance as I delve into the realm of computer languages. The courses you've provided, presented in a concise manner reminiscent of a cheat sheet, have markedly improved the accessibility and effectiveness of my learning journey. Your support is genuinely treasured.
                    </p>
                    <p className={style.author}>John Doe</p>
                    <p className={style.prof}>Web Developer</p>
                </div>
                <div className={style.card}>
                    <i className="fas fa-quote-left fa-2x mb-4" />
                    <p className={style.caption}>
                        Your courses have played a crucial role in helping me grasp all the fundamental concepts I needed to understand, resolving any previous doubts I had. The efficiency of this learning process is particularly noteworthy, allowing me to cover the material in less time. This has granted me the opportunity to spend more time applying and implementing the knowledge, rather than being bogged down by the subject itself. I appreciate the effective and time-saving approach of your courses.
                    </p>
                    <p className={style.author}>Jane Smith</p>
                    <p className={style.prof}>Graphic Designer</p>
                </div>
            </div>
        </section>
    )
}

export default Testimonial
