import React from "react";
import Part from "./Part";

function Content({ parts }) {
  return (
    <div>
      {parts.map((parts) => (
        <Part name={parts.name} exercises={parts.exercises} />
      ))}
    </div>
  );
}

export default Content;
