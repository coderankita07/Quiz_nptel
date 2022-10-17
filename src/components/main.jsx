import React from "react";
import Card from "./card";
import About from "../routes/about";
import { Routes, Route, Navigate } from "react-router-dom";

const Main = ({ questions, rightAnswers }) => {
  return (
    <Routes>
      <Route
        path="/week/:id"
        element={<Card questions={questions} rightAnswers={rightAnswers} />}
      />
      <Route path="/about" element={<About />} />
      {/* <Route path="*" element={<About />} /> */}
      <Route path="*" element={<Navigate to="/about" replace />} />
      {/* <Card /> */}
    </Routes>
  );
};

export default Main;
