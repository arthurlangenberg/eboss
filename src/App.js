import React from "react";
import { getCandidates } from "./api/candidatesApi";

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      candidates: [],
    };
  }

  componentDidMount() {
    getCandidates().then((candidates) =>
      this.setState({ candidates: candidates })
    );
  }
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
          <tbody>{this.state.candidates.map(this.renderCandidate)}</tbody>
        </table>
      </React.Fragment>
    );
  }
}
