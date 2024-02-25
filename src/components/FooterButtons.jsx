/** External **/
import React from "react";

/** Styles **/
import classes from "../../styles/FooterButtons.module.css";

const FooterButtons = ({
  correctResponseCount,
  onClickSubmit,
  onClickReset,
}) => {
  return (
    <div className={classes.container}>
      <div class="score-wrapper">
        {correctResponseCount != -1 && (
          <p className="score">Your score: {correctResponseCount} / 10</p>
        )}
      </div>
      <div className="final-btn-wrapper">
        <button onClick={onClickSubmit} className="submit">
          Submit
        </button>
        <button onClick={onClickReset} className="reset">
          Reset Quiz
        </button>
      </div>
    </div>
  );
};

export default FooterButtons;
