import React from "react";
import "./Answers.css";

const Answers = () => {
  return (
    <div className="answers">
      <h1 className="main-sub-heading">Frequently Asked Question</h1>
      <div className="answer">
        <h4>Question : How react works?</h4>
        <p>
          Reacts is a Javascript library. It basically works by maintaining a
          tree (like DOM) with its advanced diff algorithm. It user JSX, which
          is syntactical sugar, for rendering. Whenever an element is changed,
          react compares with its virtual DOM , with the browser DOM and
          re-renders where the change happened not the whole DOM. React uses
          keys to do it. When a parent element is changed, react takes it that
          the child element is definitely changed. Then it re-renders the whole
          parent element. Cause, only changing the child element needs much more
          complex diff algorithm calculations which is expensive. React uses
          heuristic O(n) algorithm for its diff calculations.
        </p>
      </div>
      <div className="answer">
        <h4>Question : Difference between props and state</h4>
        <p>
          Javascript properties, in short it is called props. props are used to
          pass data from parent component to child component. we can send
          anything via props (e.g function, event handler, object, array etc).
          props are read only and immutable(can't be changed). <br /> State is a
          react hook that is used to track a state. state is mutable, it changes
          with function call. We can not send data via state. It is used as a
          storage in the same component. When a state is changed, it is used for
          re-rendering. But the state of one component, often becomes props of
          another component.
        </p>
      </div>
      <div className="answer">
        <h4>Question : How useState() works?</h4>
        <p>
          useState is a react hook. It is used to track state. useState returns
          a state and a function to change the state. e.g [state, setState] =
          useState(), state is where the value is stored between function calls
          & setState is the function to change state & useState() is the
          initialization of the state. useState() is only used during the
          initialization. When a value is passed without changing the state,
          react ignores the current state and does not re-render it, that is
          called bail out.
        </p>
      </div>
    </div>
  );
};

export default Answers;
