import React from 'react'
import style from './Faq.module.css';

const Faq = () => {
    return (
        <div className={style.container}>
            <h2 className={style["heading-2"]}>
                Frequently Asked Questions
            </h2>
            <div className={style["card-sec"]}>
                <div className={style.card}>
                    <h3 className={style["heading-3"]}>
                        What courses do you offer?
                    </h3>
                    <p className={style.para}>
                        We offer beginner-friendly courses in essential programming languages such as Python, Java, C++, HTML, and MySQL to support you on your introductory learning journey.
                    </p>
                    <h3 className={style["heading-3"]}>
                        How long does it take to complete a course?
                    </h3>
                    <p className={style.para}>
                        The course is meticulously structured, presenting content in a concise format reminiscent of a cheatsheet. Mastery of the entire course can be achieved in under an hour, thanks to its streamlined and efficient design.
                    </p>
                    <h3 className={style["heading-3"]}>
                        How can I gauge my performance in the course?
                    </h3>
                    <p className={style.para}>
                        We've implemented a comprehensive performance evaluation system in the form of a scorecard, which records your scores from quizzes throughout the course. This feature is designed to assist you in monitoring and tracking your progress effectively.
                    </p>
                </div>
                <div className={style.card}>
                    <h3 className={style["heading-3"]}>
                        How do I enroll in a course?
                    </h3>
                    <p className={style.para}>
                        To enroll in the course, simply log in to the website to access the course materials.
                    </p>
                    <h3 className={style["heading-3"]}>
                        Can I access the courses on multiple devices?
                    </h3>
                    <p className={style.para}>
                        To enhance your convenience and flexibility, we've ensured that the course is accessible on various devices for your ease of use.
                    </p>
                    <h3 className={style["heading-3"]}>
                        What are the payment options available?
                    </h3>
                    <p className={style.para}>
                        Amazingly, all of our courses are provided at no cost, with no payment options to worry about. Enjoy complete access to our educational content, designed to be short, precise, and concise to save your valuable time—all for free.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Faq;