import React from "react";
import Landing from "./Components/Landing/Landing.jsx";
import { Route, Routes } from "react-router";
import Signup from "./Components/Signup/Signup.jsx";
import Login from "./Components/Login/Login.jsx";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import Content from "./Components/Content/Content.jsx";
import Content4 from "./Components/Content/Content4.jsx";
import Content6 from "./Components/Content/Content6.jsx";
import Content3 from "./Components/Content/Content3.jsx";
import Content2 from "./Components/Content/Content2.jsx";
import QuizCpp from "./Components/Quiz/QuizCpp/Quiz.jsx";
import QuizJava from "./Components/Quiz/QuizJava/Quiz.jsx";
import QuizPython from "./Components/Quiz/QuizPython/Quiz.jsx";
import QuizHtml from "./Components/Quiz/QuizHtml/Quiz.jsx";
import QuizMysql from "./Components/Quiz/QuizMysql/Quiz.jsx";

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/content" element={<Content />} />
      <Route path="/content4" element={<Content4 />} />
      <Route path="/content6" element={<Content6 />} />
      <Route path="/content3" element={<Content3 />} />
      <Route path="/content2" element={<Content2 />} />
      <Route path="/quizCpp" element={<QuizCpp />} />
      <Route path="/quizJava" element={<QuizJava />} />
      <Route path="/quizPython" element={<QuizPython />} />
      <Route path="/quizHtml" element={<QuizHtml />} />
      <Route path="/quizMysql" element={<QuizMysql />} />
    </Routes>
  );
};


export default App;
