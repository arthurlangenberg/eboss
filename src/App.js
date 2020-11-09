import React from "react";

export const App = () => {
  const candidates = [
    { name: "Bunny, Bugs", rank: "Airman" },
    { name: "Gonzales, Speedy", rank: "General" },
    { name: "Fudd, Elmer", rank: "Tech Seargent" },
  ];
  function renderCandidate(candidate) {
    return (
      <tr>
        <td>{candidate.name}</td>
        <td>{candidate.rank}</td>
      </tr>
    );
  }

  return (
    <React.Fragment>
      <h2>Candidates</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Rank</th>
          </tr>
        </thead>
        <tbody>{candidates.map(renderCandidate)}</tbody>
      </table>
    </React.Fragment>
  );
};
