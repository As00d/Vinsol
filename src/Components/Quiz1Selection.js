import { useState } from "react";
import Quiz1QuestionGenerator from "./Quiz1QuestionGenerator";
import classes from "./Quiz1.module.css";

const Quiz1Selection = function () {
  const [show, setShow] = useState(false);
  const [numberOfQuestion, setNumberOfQuestion] = useState(0);
  const [numberOfOperands, setNumberOfOperands] = useState(0);
  const [operators, setOperators] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [quizSt, setquizSt] = useState(false);

  const toggleHandler = function () {
    if (show) setShow(false);
    else setShow(true);
  };

  const questionHandler = function (e) {
    setNumberOfQuestion(e.target.value);
    console.log(numberOfQuestion);
  };

  const operandHandler = function (e) {
    setNumberOfOperands(e.target.value);
    console.log(numberOfOperands);
  };

  const submitHandler = function () {
    console.log(operators, numberOfQuestion, numberOfOperands);
    for (let i = 0; i < Number(numberOfQuestion); i++) {
      let firstOperand = Math.floor(
        Math.random() * Number(numberOfOperands) + 1
      );
      let randomOperator = Math.floor(Math.random() * operators.length);
      let midOperator = operators.at(randomOperator);
      let secondOperand = Math.floor(
        Math.random() * Number(numberOfOperands) + 1
      );
      let question = `${firstOperand} ${midOperator} ${secondOperand}`;
      console.log(question);
      setQuestions((prev) => {
        return [...prev, question];
      });
    }
    setShow(false);
    setquizSt(true);
  };

  const operatorHandler = function (e) {
    const { value, checked } = e.target;
    console.log(`${value} is checked`);
    if (checked) {
      setOperators([...operators, value]);
    } else {
      setOperators(operators.filter((e) => e !== value));
    }
  };

  const resetHandler = function () {
    setShow(true);
    setquizSt(false);
    setOperators([]);
    setQuestions([]);
    setNumberOfQuestion(0);
    setNumberOfOperands(0);
  };

  return (
    <>
      <div className={classes.quiz1Head}>
        <h2 onClick={toggleHandler}>
          Please click here before starting the quiz
        </h2>
      </div>
      <div>
        {show && (
          <div className={classes.quiz1Body}>
            <div className={classes.quiz1BodyRow}>
              <div style={{ display: "inline-block", marginLeft: "3rem" }}>
                Please select the number of questions
              </div>
              <div style={{ display: "inline-block", paddingLeft: "1rem" }}>
                <input
                  type="number"
                  name="numberOfQuestions"
                  id="numberOfQuestions"
                  onChange={questionHandler}
                />
              </div>
            </div>
            <div className={classes.quiz1BodyRow}>
              <div style={{ display: "inline-block", marginLeft: "3rem" }}>
                Please select the range of operands
              </div>
              <div style={{ display: "inline-block", paddingLeft: "2rem" }}>
                <input
                  type="number"
                  name="operandRange"
                  id="operandRange"
                  onChange={operandHandler}
                />
              </div>
            </div>
            <div className={classes.quiz1BodyRow}>
              <div style={{ display: "inline-block", marginLeft: "3rem" }}>
                Please select the operators you want to practice
              </div>
              <div style={{ marginLeft: "16rem", paddingTop: "1rem" }}>
                <input
                  type="checkbox"
                  name="multiply"
                  id="multiply"
                  value="*"
                  onChange={operatorHandler}
                />
                &nbsp;&nbsp;*&nbsp;&nbsp;
                <input
                  type="checkbox"
                  name="divide"
                  id="divide"
                  value="/"
                  onChange={operatorHandler}
                />
                &nbsp;&nbsp;/&nbsp;&nbsp;
                <input
                  type="checkbox"
                  name="add"
                  id="add"
                  value="+"
                  onChange={operatorHandler}
                />
                &nbsp;&nbsp;+&nbsp;&nbsp;
                <input
                  type="checkbox"
                  name="subtract"
                  id="subtract"
                  value="-"
                  onChange={operatorHandler}
                />
                &nbsp;&nbsp;-&nbsp;&nbsp;
              </div>
            </div>
            <div>
              <button onClick={submitHandler} className={classes.quiz1StartBtn}>
                Start Quiz
              </button>
            </div>
          </div>
        )}

        {quizSt && (
          <>
            <Quiz1QuestionGenerator
              questions={questions}
            ></Quiz1QuestionGenerator>
            <button className={classes.quizResetBtn} onClick={resetHandler}>
              Reset
            </button>
          </>
        )}
      </div>
    </>
  );
};
export default Quiz1Selection;
