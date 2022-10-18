import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import "../../styles/card.css";

const Card = ({ questions, rightAnswers, images, ...props }) => {
  const { answers, setAnswers, reveal, setReveal } = props;
  const { id } = useParams();

  const week = questions[`week${id}`];
  const rightAnswer = rightAnswers[`week${id}`];
  const image = images[`week${id}`];

  if (week == undefined || image == undefined) return <></>;

  const optionClicked = (option) => {
    setSelect(option);
  };

  const handleSelection = (i, j) => {
    if (reveal[i] != -1) return;
    const copy = [...answers];
    if (copy[i] == j) copy[i] = -1;
    else copy[i] = j;
    setAnswers(copy);
    console.log(copy);
  };

  const handleClearResponse = (i) => {
    let copy = [...answers];
    copy[i] = -1;
    setAnswers(copy);

    copy = [...reveal];
    copy[i] = -1;
    setReveal(copy);
  };

  const handleReveal = (i) => {
    const copy = [...reveal];
    copy[i] = rightAnswer[i];
    setReveal(copy);
    // const copy = [...answers];
    // copy[i] = rightAnswer[i];
    // setAnswers(copy);
  };

  return week.map((question, i) => {
    let size = question.length;
    // if(question[0] == "headline") return <></>;

    return (
      <>
        <div className="card" key={i}>
          <div className="que-statement">
            {size != 1 && <h3 className="question-number">Question {i + 1}:</h3>}
            <p className="question">{ReactHtmlParser(question[0])}</p>
          </div>

          {image[i] != undefined && image[i] != "" && <img src={image[i]} />}
          {question.map((option, j) => {
            return (
              j != 0 && (
                <div className="options" key={j}>
                  <div
                    className={reveal[i] == j ? "option reveal" : "option"}
                    id={answers[i] == j ? "selected" : undefined}
                    onClick={() => handleSelection(i, j)}
                  >
                    <span className="option-tag">
                      {String.fromCharCode(64 + j)}:
                    </span>
                    <span className="option-value">{option}</span>
                  </div>
                </div>
              )
            );
          })}

          {size != 1 && (
            <div className="card-button">
              <button
                className="btn reveal-btn"
                onClick={() => handleReveal(i)}
              >
                Reveal Answer
              </button>
              <button
                className="btn clear-btn"
                onClick={() => handleClearResponse(i)}
              >
                Clear Response
              </button>
            </div>
          )}
        </div>
      </>
    );
  });
};

export default Card;
