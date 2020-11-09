import React from "react";

const candidates = [
  { name: "Cory", rank: "Airman" },
  { name: "Cory1", rank: "Airman" },
  { name: "Cory2", rank: "Airman" },
];

export class App extends React.Component {
  renderCandidate(candidate) {
    return (
      <tr>
        <td>{candidate.name}</td>
        <td>{candidate.rank}</td>
      </tr>
    );
  }
  render() {
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
          <tbody>{candidates.map(this.renderCandidate)}</tbody>
        </table>
      </React.Fragment>
    );
  }
}
