/** External */
import React from "react";
import ReactHtmlParser from "react-html-parser";

/** Styles */
import classes from "../../styles/QuestionCard.module.css";

const QuestionCard = ({
  questionNumber,
  question,
  questionImage,
  correctAnswers,
}) => {
  return (
    <div className={classes.container}>
      <div className={classes.questionContainer}>
        <h3 className={classes.questionNumber}>Question {questionNumber}</h3>
        <p className={classes.questionText}>{ReactHtmlParser(question[0])}</p>
      </div>

      {questionImage ? <img src={questionImage} /> : null}

      {question.map((option, index) => {
        return (
          index != 0 && (
            <div key={index} className={classes.option}>
              <div onClick={() => {}}>
                <span className={classes.optionTag}>
                  {String.fromCharCode(64 + index)}:
                </span>
                <span className="option-value">{option}</span>
              </div>
            </div>
          )
        );
      })}

      <div className={classes.buttonContainer}>
        <button className={classes.revealBtn} onClick={() => {}}>
          Reveal Answer
        </button>
        <button className={classes.clearBtn} onClick={() => {}}>
          Clear Response
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;
