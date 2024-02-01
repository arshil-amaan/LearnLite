import React from 'react';
import style from './Dashboard.module.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import JavaLogo from '../../images/java_logo.png';
import PythonLogo from '../../images/python_logo.png';
import HtmlLogo from '../../images/html_logo.png';
import MysqlLogo from '../../images/mysql_logo.png';
import CppLogo from '../../images/cpp_logo.png';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <>
      <div className={style.container}>
        <Navbar isLoggedIn='true' />
        <div>
          <h1>Dashboard</h1>
          <div className={style['courses-container']}>
            {/* cpp */}
            <div className={`${style.book} ${style['cpp-book']}`}>
              <img src={CppLogo} alt="logoCpp" />
              <div>
                <p>Hello C++ Programming Language</p>
                <div className={style['book-btn']}>
                  <Link to='/content4'><button>Start Learning</button></Link>
                  <Link to='/quizCpp'><button>Start Quiz</button></Link>
                </div>
              </div>
              <div className={`${style.cover} ${style['cpp-cover']}`}></div>
            </div>
            {/* java */}
            <div className={`${style.book} ${style['java-book']}`}>
              <img src={JavaLogo} alt="logoJava" />
              <div>
                <p>Hello Java Programming Language</p>
                <div className={style['book-btn']}>
                  <Link to='/content6'><button>Start Learning</button></Link>
                  <Link to='/quizJava'><button>Start Quiz</button></Link>
                </div>
              </div>
              <div className={`${style.cover} ${style['java-cover']}`}></div>
            </div>
          </div>
          <div className={style['courses-container']}>
            {/* python */}
            <div className={`${style.book} ${style['python-book']}`}>
              <img src={PythonLogo} alt="logoPython" />
              <div>
                <p>Hello Python Programming Language</p>
                <div className={style['book-btn']}>
                  <Link to='/content3'><button>Start Learning</button></Link>
                  <Link to='/quizPython'><button>Start Quiz</button></Link>
                </div>
              </div>
              <div className={`${style.cover} ${style['python-cover']}`}></div>
            </div>
            {/* html */}
            <div className={`${style.book} ${style['html-book']}`}>
              <img src={HtmlLogo} alt="logoHtml" />
              <div>
                <p>Hello HTML</p>
                <div className={style['book-btn']}>
                  <Link to='/content2'><button>Start Learning</button></Link>
                  <Link to='/quizHtml'><button>Start Quiz</button></Link>
                </div>
              </div>
              <div className={`${style.cover} ${style['html-cover']}`}></div>
            </div>
          </div>
          {/* line 3 */}
          <div className={style['courses-container']}>
            {/* MySQL */}
            <div className={`${style.book} ${style['mysql-book']}`}>
              <img src={MysqlLogo} alt="logoMysql" />
              <div>
                <p>Hello MySQL</p>
                <div className={style['book-btn']}>
                  <Link to='/content3'><button>Start Learning</button></Link>
                  <Link to='/quizMysql'><button>Start Quiz</button></Link>
                </div>
              </div>
              <div className={`${style.cover} ${style['mysql-cover']}`}></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Dashboard
