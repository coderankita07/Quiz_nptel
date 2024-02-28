/** External **/
import React from "react";

/** Styles **/
import classes from "../../styles/FooterButtons.module.css";

const FooterButtons = ({ correctAnswerCount, onClickSubmit, onClickReset }) => {
  return (
    <div className={classes.container}>
      {correctAnswerCount !== -1 ? (
        <div className={classes.scoreContainer}>
          <p className="score">Your score: {correctAnswerCount} / 10</p>
        </div>
      ) : null}

      <div className={classes.btnContainer}>
        <button onClick={onClickSubmit} className={classes.submitBtn}>
          Submit
        </button>
        <button onClick={onClickReset} className={classes.resetBtn}>
          Reset Quiz
        </button>
      </div>
    </div>
  );
};

export default FooterButtons;
