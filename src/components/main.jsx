/** External */
import React from "react";

/** Components */
import Questions from "./Questions";

const Main = ({ questions, rightAnswers, images }) => {
  return (
    <>
      <Questions
        questions={questions}
        rightAnswers={rightAnswers}
        images={images}
      />
    </>
  );
};

export default Main;
