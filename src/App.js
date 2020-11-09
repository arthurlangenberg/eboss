import React from "react";

export const App = () => {
  const candidates = [
    { name: "Bunny, Bugs", rank: "Airman" },
    { name: "Gonzales, Speedy", rank: "General" },
    { name: "Fudd, Elmer", rank: "Tech Seargent" },
  ];
  function renderCandidate(candidate) {
    return (
      <li>
        {candidate.name} - {candidate.rank}
      </li>
    );
  }
  return (
    <React.Fragment>
      <h2>Candidates</h2>
      <ul>{candidates.map(renderCandidate)}</ul>
    </React.Fragment>
  );
};
