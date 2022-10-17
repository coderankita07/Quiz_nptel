import React from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Main from "../components/main";
import { questions, rightAnswers } from "../../db/db";
import "../../styles/home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="left">
          <Sidebar className="left" />
        </div>
        <div className="right">
          <Main className="right" questions={questions} rightAnswers={rightAnswers}/>
        </div>
      </div>
    </>
  );
};

export default Home;
