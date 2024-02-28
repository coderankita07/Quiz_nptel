/** External */
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { TbCircleArrowUpFilled } from "react-icons/tb";

/** Components */
import About from "./about";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

/** Utils */
import { questions, rightAnswers, images } from "../../db";
import { scrollContainerToTop } from "../utils/common";

/** Styles */
import classes from "../../styles/home.module.css";
import Questions from "../components/Questions";

const Home = () => {
  return (
    <div className={classes.container}>
      <Navbar />

      <div className={classes.bodyContainer}>
        <Sidebar shouldHideForSmallScreens />

        <div className={classes.rightContainer}>
          <Routes>
            <Route
              path="/week/:id"
              element={
                <Questions
                  questions={questions}
                  rightAnswers={rightAnswers}
                  images={images}
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Navigate to="/about" replace />} />
          </Routes>
        </div>

        <div className={classes.moveToTopBtn} onClick={scrollContainerToTop}>
          <TbCircleArrowUpFilled />
        </div>
      </div>
    </div>
  );
};

export default Home;
