import React from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Main from "../components/main";
import { questions, rightAnswers, images } from "../../db/db";
import "../../styles/home.css";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "./about";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="left">
          <Sidebar className="left" />
        </div>
        <div className="right">
          <Routes>
            <Route
              path="/week/:id"
              element={
                <Main questions={questions} rightAnswers={rightAnswers} images={images} />
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Navigate to="/about" replace />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Home;
