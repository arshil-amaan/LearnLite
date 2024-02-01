import React from 'react'
import style from './Feature.module.css';

const Feature = () => {
  return (
    <div>
      <section className={style['course-sec']}>
        <div className={style['card']}>
          <h2>JAVA</h2>
          <p>An open-source, class-based, high-level, object-oriented programming language.</p>
        </div>
        <div className={style['card']}>
          <h2>PYTHON</h2>
          <p>A dynamically typed, high-level programming language that supports object-oriented and functional programming.</p>
        </div>
        <div className={style['card']}>
          <h2>HTML</h2>
          <p>HyperText Markup Language, a standard for creating web pages, markup language used to structure content on the web</p>
        </div>
      </section>
    </div>
  )
}

export default Feature
