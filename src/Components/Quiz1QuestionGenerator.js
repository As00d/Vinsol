import classes from "./Quiz1.module.css";
import { useState } from "react";

const Quiz1QuestionGenerator = function (props) {
  const [ans, setAns] = useState("");
  const [submitAns, setSubmitAns] = useState([]);
  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);
  const [report, setReport] = useState(false);

  let quiz1Question = props.questions;
  let answerArray = [];
  let wrongAns = [];
  let operand1, operand2, answer;

  for (let i = 0; i < quiz1Question.length; i++) {
    console.log(quiz1Question[i]);
    if (quiz1Question[i].indexOf("/") !== -1) {
      operand1 = quiz1Question[i].slice(0, quiz1Question[i].indexOf("/"));
      operand2 = quiz1Question[i].slice(quiz1Question[i].indexOf("/") + 1);
      answer = +operand1 / +operand2;
      answerArray.push(+answer.toFixed(1));
    }
    if (quiz1Question[i].indexOf("+") !== -1) {
      operand1 = quiz1Question[i].slice(0, quiz1Question[i].indexOf("+"));
      operand2 = quiz1Question[i].slice(quiz1Question[i].indexOf("+") + 1);
      answer = +operand1 + +operand2;
      answerArray.push(answer);
    }
    if (quiz1Question[i].indexOf("*") !== -1) {
      operand1 = quiz1Question[i].slice(0, quiz1Question[i].indexOf("*"));
      operand2 = quiz1Question[i].slice(quiz1Question[i].indexOf("*") + 1);
      answer = +operand1 * +operand2;
      answerArray.push(answer);
    }
    if (quiz1Question[i].indexOf("-") !== -1) {
      operand1 = quiz1Question[i].slice(0, quiz1Question[i].indexOf("-"));
      operand2 = quiz1Question[i].slice(quiz1Question[i].indexOf("-") + 1);
      answer = +operand1 - +operand2;
      answerArray.push(answer);
    }
  }

  console.log(answerArray);

  const answerHandler = function (e) {
    setAns(e.target.value);
  };

  const nextHandler = function () {
    console.log("click");
    setSubmitAns((prev) => {
      return [...prev, +ans];
    });
    setI((prev) => {
      return prev + 1;
    });
    console.log(answerArray[i], +ans);
    if (answerArray[i] === +ans) {
      setScore((prev) => {
        return prev + 1;
      });
    }
    setAns("");
  };

  const submitHandler = function () {
    setSubmitAns((prev) => {
      return [...prev, +ans];
    });
    if (answerArray[i] === +ans) {
      setScore((prev) => {
        return prev + 1;
      });
    }
    setAns("");
    for (let i = 0; i < answerArray.length; i++) {
      if (answerArray[i] === submitAns[i]) {
        wrongAns.push(false);
      } else wrongAns.push(true);
    }
    setReport(true);
  };

  console.log(submitAns);
  console.log(wrongAns);

  return (
    <>
      {!report && (
        <div className={classes.score}>
          <span>{score}</span>
        </div>
      )}
      {!report ? (
        <div className={classes.quizQuestions}>
          <div className={classes.randomQuestion}>{quiz1Question[i]}</div>
          <div className={classes.randomQuestionInput}>
            <input
              type="number"
              name="quizAnswer"
              id="quizAnswer"
              onChange={answerHandler}
              value={ans}
            />
          </div>
          {i < quiz1Question.length - 1 ? (
            <button
              className={classes.nextBtn}
              onClick={nextHandler}
              disabled={!ans}
            >
              Next
            </button>
          ) : (
            <button className={classes.submitBtn} onClick={submitHandler}>
              Submit
            </button>
          )}
        </div>
      ) : (
        <div className={classes.endReport}>
          {
            <div>
              <div className={classes.endReportHeading}>Report</div>
              <div className={classes.endReportScore}>
                Total Score : {score}
              </div>
              <div style={{ display: "flex" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p className={classes.endReportQuestionHeading}>
                    Questions :
                  </p>
                  <br></br>
                  <div className={classes.endReportQuestion}>
                    {quiz1Question.map((ques) => {
                      return <div style={{ padding: "0.4rem" }}>{ques}</div>;
                    })}
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p className={classes.endReportAnswerHeading}>Answers : </p>
                  <div className={classes.endReportAnswer}>
                    {answerArray.map((ans) => {
                      return <div style={{ padding: "0.4rem" }}>{ans}</div>;
                    })}
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      )}
    </>
  );
};
export default Quiz1QuestionGenerator;
