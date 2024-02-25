/** External */
import React, { useEffect, useState } from "react";

/** Components */
import Questions from "./Questions";
import FooterButtons from "./FooterButtons";

const Main = ({ questions, rightAnswers, images }) => {
  return (
    <>
      <Questions
        questions={questions}
        rightAnswers={rightAnswers}
        images={images}
      />

      <FooterButtons />
    </>
  );
};

export default Main;
