/** External */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

/** Components */
import QuestionCard from "./QuestionCard";
import FooterButtons from "./FooterButtons";

/** Utils */
import { scrollContainerToTop } from "../utils/common";

const Questions = ({ questions, rightAnswers, images }) => {
  const [selectedAnswers, setSelectedAnswers] = useState(
    new Array(10).fill(-1)
  );
  const [revealAnswer, setRevealAnswer] = useState(new Array(10).fill(false));
  const [correctAnswersCount, setCorrectAnswersCount] = useState(-1);

  const { id } = useParams();

  useEffect(() => {
    handleClickReset();
    scrollContainerToTop();
  }, [id]);

  const weekId = `week${id}`;
  const currentWeekQuestions = questions[weekId];
  const currentWeekImages = images[weekId];
  const rightAnswersForCurrentWeek = rightAnswers[weekId];

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

  const calculateAndSetCorrectAnswersCount = () => {
    let correctAnswers = 0;
    for (let i = 0; i < selectedAnswers.length; i++) {
      if (selectedAnswers[i] === rightAnswersForCurrentWeek[i])
        correctAnswers++;
    }

    setCorrectAnswersCount(correctAnswers);
  };

  const handleClickSubmitTest = () => {
    const revealAllAnswers = new Array(10).fill(true);
    setRevealAnswer(revealAllAnswers);
    calculateAndSetCorrectAnswersCount();
  };

  const handleClickReset = () => {
    const resetedRevealedAnswers = new Array(10).fill(false);
    setRevealAnswer(resetedRevealedAnswers);

    const resetSelectedAnswers = new Array(10).fill(-1);
    setSelectedAnswers(resetSelectedAnswers);
    setCorrectAnswersCount(-1);
  };

  if (currentWeekQuestions == undefined) return <>Invalid url</>;

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

      <FooterButtons
        correctAnswerCount={correctAnswersCount}
        onClickSubmit={handleClickSubmitTest}
        onClickReset={handleClickReset}
      />
    </div>
  );
};

export default Questions;
