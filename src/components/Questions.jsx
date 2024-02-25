/** External */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

/** Components */
import QuestionCard from "./QuestionCard";

const Questions = ({ questions, rightAnswers, images }) => {
  const [selectedAnswers, setSelectedAnswers] = useState(
    new Array(10).fill(-1)
  );

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

  const handleSubmit = () => {
    let correctAnswersCount = answers.reduce(
      (correctAnswersCount, selectedOption, index) => {
        return selectedOption == rightAnswersForCurrentWeek[index]
          ? correctAnswersCount++
          : correctAnswersCount;
      },
      0
    );
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
            questionImage={currentWeekImages[index]}
            correctAnswers={rightAnswersForCurrentWeek}
          />
        );
      })}
    </div>
  );
};

export default Questions;
