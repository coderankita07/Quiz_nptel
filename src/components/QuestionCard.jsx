/** External */
import React from "react";
import classNames from "classnames";
import ReactHtmlParser from "react-html-parser";

/** Styles */
import classes from "../../styles/QuestionCard.module.css";

const QuestionCard = ({
  questionNumber,
  question,
  questionImage,
  selectedOption,
  correctOptionIndex,
  onSelectAnswer,
  onClickRevealAnswer,
  onClickClearResponse,
  shouldRevealAnswer,
}) => {
  return (
    <div className={classes.container}>
      <div className={classes.questionContainer}>
        <h3 className={classes.questionNumber}>Question {questionNumber}</h3>
        <p className={classes.questionText}>{ReactHtmlParser(question[0])}</p>
      </div>

      {questionImage ? <img src={questionImage} /> : null}

      {question.map((option, index) => {
        const optionClasses = classNames(classes.option, {
          [classes.selectedOption]: selectedOption == index,
          [classes.correctOption]:
            shouldRevealAnswer && index === correctOptionIndex,
        });

        return (
          index != 0 && (
            <div key={index} className={classes.option}>
              <div onClick={() => onSelectAnswer(questionNumber - 1, index)}>
                <span className={classes.optionTag}>
                  {String.fromCharCode(64 + index)}:
                </span>
                <span className={optionClasses}>{option}</span>
              </div>
            </div>
          )
        );
      })}

      <div className={classes.buttonContainer}>
        <button className={classes.revealBtn} onClick={onClickRevealAnswer}>
          Reveal Answer
        </button>
        <button className={classes.clearBtn} onClick={onClickClearResponse}>
          Clear Response
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;
