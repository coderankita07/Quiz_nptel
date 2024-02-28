/** External */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

/** Components */
import QuestionCard from "./QuestionCard";
import FooterButtons from "./FooterButtons";

const Questions = ({ questions, rightAnswers, images }) => {
  const [selectedAnswers, setSelectedAnswers] = useState(
    new Array(10).fill(-1)
  );
  const [revealAnswer, setRevealAnswer] = useState(new Array(10).fill(false));

  const { id } = useParams();

  useEffect(() => {
    handleReset();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [id]);

  const weekId = `week${id}`;
  const currentWeekQuestions = questions[weekId];
  const currentWeekImages = images[weekId];
  const rightAnswersForCurrentWeek = rightAnswers[weekId];

  const handleReset = () => {
    const reset = new Array(10).fill(-1);
    setSelectedAnswers(reset);
  };

  const handleRevealAnswer = (questionIndex) => {
    const newRevealAnswer = [...revealAnswer];
    newRevealAnswer[questionIndex] = true;
    setRevealAnswer(newRevealAnswer);
  };

  const handleSelectAnswer = (questionIndex, selectedOption) => {
    if (revealAnswer[questionIndex]) return;

    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[questionIndex] = selectedOption;
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleClickClearResponse = (questionIndex) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[questionIndex] = -1;
    setSelectedAnswers(newSelectedAnswers);

    const newRevealAnswer = [...revealAnswer];
    newRevealAnswer[questionIndex] = false;
    setRevealAnswer(newRevealAnswer);
  };

  if (currentWeekQuestions == undefined) return <>Invalid url</>;

  console.log({ currentWeekQuestions });
  return (
    <div>
      {currentWeekQuestions.map((question, index) => {
        return (
          <QuestionCard
            key={index}
            questionNumber={index + 1}
            question={question}
            selectedOption={selectedAnswers[index]}
            shouldRevealAnswer={revealAnswer[index]}
            onClickRevealAnswer={() => handleRevealAnswer(index)}
            onClickClearResponse={() => handleClickClearResponse(index, -1)}
            onSelectAnswer={handleSelectAnswer}
            questionImage={currentWeekImages[index]}
            correctOptionIndex={rightAnswersForCurrentWeek[index]}
          />
        );
      })}

      <FooterButtons />
    </div>
  );
};

export default Questions;
