import React, { useState } from 'react';
import Quiz_ques from './Quiz_ques_cpp.js';
import style from './Quiz.module.css';
import Navbar from '../../Navbar/Navbar.jsx';
import Score from '../../Score/Score.jsx';

const Quiz = () => {

    const [decision, setDecision] = useState(true);
    const [level, setLevel] = useState(0);
    const [currQuesNo, setCurrQuesNo] = useState(0);
    const [currQues, setCurrQues] = useState(Quiz_ques[level][currQuesNo]);
    // const [isLastQues, setIsLastQues] = useState(false);
    const [btnTxt, setBtnTxt] = useState("Next Question");
    const [score, setScore] = useState(0);
    const [classes, setClasses] = useState({ op1: `${style.ans}`, op2: `${style.ans}`, op3: `${style.ans}`, op4: `${style.ans}` });
    const defClass = { op1: `${style.ans}`, op2: `${style.ans}`, op3: `${style.ans}`, op4: `${style.ans}` };
    const [showScoreCard, setShowScoreCard] = useState(false);

    const updateQue = () => {
        if (currQuesNo < Quiz_ques[level].length - 1) {
            setCurrQuesNo(currQuesNo + 1);
            const newQuestion = Quiz_ques[level][currQuesNo + 1];
            setCurrQues(newQuestion);
            // setIsLastQues(false);
        } else if (currQuesNo === Quiz_ques[level].length - 1) {
            // setIsLastQues(true);
        }
        if (currQuesNo === Quiz_ques[level].length - 2) {
            setBtnTxt("Show Score");
        }
    }

    const handleLevelChange = (e) => {
        const selectedLevel = parseInt(e.target.value, 10);
        setLevel(selectedLevel);
        setDecision(false);
        setCurrQuesNo(0);
        // setIsLastQues(false);
        setCurrQues(Quiz_ques[selectedLevel][0]);
        setScore(0);
    };

    const showScore = () => {
        console.log("Your soccer is " + score)
        setShowScoreCard(true);

    }

    const evaluateAns = (event, curr, prop) => {
        setClasses({ ...defClass, [curr]: `${style.ans} ${style.selected}` })
        if (prop) {
            setScore(score + 1);
        }
        console.log(prop);
        console.log(event.target.innerHTML)
    }

    const ansChosen = () => {
        setClasses({ ...defClass })
        if (currQuesNo === Quiz_ques[level].length - 1) {
            showScore();
        } else {
            updateQue();
        }
    }

    return (
        <>
            <Navbar isLoggedIn={true} />
            <div className={style.app}>

                {!showScoreCard && <h1>Figure it out!!</h1>}
                
                {!showScoreCard && decision && <select value={level} onChange={handleLevelChange}>
                    <option value={0}>Select</option>
                    <option value={1}>Easy</option>
                    <option value={2}>Medium</option>
                    <option value={3}>Hard</option>
                </select>}

                {!showScoreCard && !decision && <div className={style.quiz}>

                    <h2 id={style.ques}>{`Q. ${currQuesNo + 1} : ${currQues.question}`}</h2>
                    <div id={style["ans-btn"]}>
                        <button onClick={(event) => { evaluateAns(event, 'op1', currQues.answers[0].correct) }} className={classes.op1}>{currQues.answers[0].text}</button>
                        <button onClick={(event) => { evaluateAns(event, 'op2', currQues.answers[1].correct) }} className={classes.op2}>{currQues.answers[1].text}</button>
                        <button onClick={(event) => { evaluateAns(event, 'op3', currQues.answers[2].correct) }} className={classes.op3}>{currQues.answers[2].text}</button>
                        <button onClick={(event) => { evaluateAns(event, 'op4', currQues.answers[3].correct) }} className={classes.op4}>{currQues.answers[3].text}</button>
                    </div>

                    {/* <button id={style["next-ques"]} onClick={!isLastQues && {updateQue}} disabled={isLastQues}>{btnTxt}</button> */}
                    <button id={style["next-ques"]} onClick={ansChosen}>{btnTxt}</button>
                    {/* <button id={style["next-ques"]} onClick={updateQue} disabled={isLastQues}>{btnTxt}</button> */}

                </div>}
                {
                    showScoreCard && <Score score={score}/>
                }

            </div>
        </>
    )
}

export default Quiz;