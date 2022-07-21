import classes from "./Quiz1.module.css";
import { useState } from "react";
import Quiz1Selection from "./Quiz1Selection";

const Quiz1 = function () {
  return (
    <div className={classes.quizOne}>
      <div className={classes.quizOneBanner}></div>
      <Quiz1Selection></Quiz1Selection>
    </div>
  );
};
export default Quiz1;
