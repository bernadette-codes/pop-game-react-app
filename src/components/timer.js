import React from "react";

const Timer = props => {
  return (
    <div>
      <p>You have 30 seconds to pop all the bubbles.</p>

      <p className="timer">
        Time Left:{" "}
        <strong>
          <span id="countDown">{props.timeLeft}</span>{" "}
        </strong>
        sec
      </p>
    </div>
  );
};

export default Timer;
