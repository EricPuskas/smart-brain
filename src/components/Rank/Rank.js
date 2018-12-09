import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className="white f3">
        {`${name}, your current score is`}{" "}
        <span className="white f1">{entries}</span>
      </div>
    </div>
  );
};

export default Rank;
