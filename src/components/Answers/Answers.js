import React from "react";
import "./Answers.css";

const Answers = () => {
  return (
    <div className="answers">
      <h1 className="main-sub-heading">Frequently Asked Question</h1>
      <div className="answer">
        <h4>Question : How react works?</h4>
        <p>Answer :</p>
      </div>
      <div className="answer">
        <h4>Question : Difference between props and state</h4>
        <p>Answer :</p>
      </div>
      <div className="answer">
        <h4>Question : How useState() works?</h4>
        <p>Answer :</p>
      </div>
    </div>
  );
};

export default Answers;
