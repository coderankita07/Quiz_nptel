import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "./card";

const Main = ({ questions, rightAnswers, images }) => {
  const [rightReponse, setRightResponse] = useState(-1);
  const [answers, setAnswers] = useState([
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  ]);
  const [reveal, setReveal] = useState([
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  ]);
  // const [id, setId] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    handleReset();
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, [id]);

  const week = questions[`week${id}`];
  const rightAnswer = rightAnswers[`week${id}`];

  const handleReset = () => {
    const reset = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
    setAnswers(reset);
    setReveal(reset);
    setRightResponse(-1);
    // const { id:_id } = useParams();
    // setId(_id);
  };

  const handleSubmit = () => {
    let count = 0;
    for (let i in answers) {
      if (answers[i] == rightAnswer[i]) count++;
    }

    setReveal(rightAnswer);
    setRightResponse(count);
    console.log("Right answers: ", count);
  };

  if (week == undefined) return <></>;

  return (
    <>
      <Card
        questions={questions}
        rightAnswers={rightAnswers}
        images={images}
        answers={answers}
        setAnswers={setAnswers}
        reveal={reveal}
        setReveal={setReveal}
      />

      <div className="final-btn">
        <div class="score-wrapper">
          {rightReponse != -1 && (
            <p className="score">Your score: {rightReponse} / 10</p>
          )}
        </div>
        <div className="final-btn-wrapper">
          <button onClick={handleSubmit} className="submit">
            Submit
          </button>
          <button onClick={handleReset} className="reset">
            Reset Quiz
          </button>
        </div>
      </div>
    </>
  );
};

export default Main;
