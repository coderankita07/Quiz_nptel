import React from "react";
import "../../styles/about.css";

const About = () => {
  return (
    <div className="about">
      <h1>About</h1>
      <p>Revision Portal for Software Testing</p>
      <p>
        <i>- by Saurabh Raj</i>
      </p>
      <br />
      <p>
        <strong>Email: </strong> <a href="mailto: me4saurabh4u@gmail.com">me4saurabh4u@gmail.com</a>
      </p>
      <p>
        <strong>
          LinkedIn:{" "}
        </strong>
          <a href="https://www.linkedin.com/in/saurabhcu/" target="_blank">
            Link
          </a>
      </p>
      <br />
      <p>
          <strong>Chapterwise PDFs (Drive Link):{" "}</strong>
          <a href="https://drive.google.com/drive/folders/1ZF8BbL012nj6dNoRVCAh0mNZP709-9DR" target="_blank">
             Link
          </a>{" "}
      </p>
    </div>
  );
};

export default About;
