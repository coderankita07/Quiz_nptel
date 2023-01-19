import React, { useState } from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Main from "../components/main";
import { questions, rightAnswers, images } from "../../db/db";
import "../../styles/home.css";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "./about";

const Home = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    let newToggle = !toggle;
    setToggle(newToggle);
    console.log('I am clicke');
  }

  function toggleCSS() {
    return toggle ? 'toggle-button toggle-button-active' : 'toggle-button';
  }

  function toggleNavbar() {
    return toggle ? 'left left-active' : 'left';
  }

  function translateRight() {
    return toggle ? 'right right-translate' : 'right';
  }

  function menuButtonContent() {
    return toggle ? '<' : '>';
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <div className={toggleNavbar()} id="fixed-left">
          <Sidebar className="left" />
        </div>
        <div className={toggleCSS()} onClick={handleToggle}>
          {menuButtonContent()}
        </div>
        <div className={translateRight()}>
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
