import classes from "./Quiz2.module.css";
import Quiz2Selection from "./Quiz2Selection";

const Quiz2 = function () {
  return (
    <div className={classes.quizTwo}>
      <div className={classes.quizTwoBanner}></div>
      <Quiz2Selection></Quiz2Selection>
    </div>
  );
};
export default Quiz2;
