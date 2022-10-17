import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/card.css";

const Card = ({ questions, rightAnswers }) => {
  const [selected, setSelect] = useState(-1);
  const [answers, setAnswers] = useState([
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  ]);
  const [reveal, setReveal] = useState([
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  ]);

  const { id } = useParams();

  const week1 = questions[`week${id}`];
  const rightAnswer = rightAnswers[`week${id}`];

  if (week1 == undefined) return <></>;

  const optionClicked = (option) => {
    setSelect(option);
  };

  const handleSelection = (i, j) => {
    const copy = [...answers];
    if (copy[i] == j) copy[i] = -1;
    else copy[i] = j;
    setAnswers(copy);
    console.log(copy);
  };

  const handleClearResponse = (i) => {
    const copy = [...answers];
    copy[i] = -1;
    setAnswers(copy);
  };

  const handleReveal = (i) => {
    const copy = [...answers];
    copy[i] = rightAnswer[i];
    setAnswers(copy);
  };

  let row, col;

  return week1.map((question, i) => {
    return (
      <div className="card" key={i}>
        <div className="que-statement">
          <h3>Question {i + 1}:</h3>
          <p>{question[0]}</p>
        </div>

        {question.map((option, j) => {
          return (
            j != 0 && (
              <div className="options" key={j}>
                <div
                  className="option"
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

        <button className="btn reveal" onClick={() => handleReveal(i)}>
          Reveal Answer
        </button>
        <button className="btn clear" onClick={() => handleClearResponse(i)}>
          Clear Response
        </button>
      </div>
    );
  });

  return (
    <div className="card">
      <div className="que-statement">
        <h3>Question 1:</h3>
        <p>This is my question.. What do you think should be an ideal way?</p>
      </div>
      <div className="options">
        <div
          className="option"
          id={selected == 1 ? "selected" : undefined}
          onClick={() => optionClicked(1)}
        >
          <span className="option-tag">A:</span>
          <span className="option-value">Option-1</span>
        </div>
        <div className="option">
          <span className="option-tag">B:</span>
          <span className="option-value">Option-2</span>
        </div>
        <div className="option">
          <span className="option-tag">C:</span>
          <span className="option-value">Option-3</span>
        </div>
        <div className="option">
          <span className="option-tag">D:</span>
          <span className="option-value">Option-4</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
