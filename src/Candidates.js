import React from "react";
import { getCandidates } from "./api/candidatesApi";
import { Link } from "react-router-dom";

export class Candidates extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      candidates: [],
    };
  }

  async componentDidMount() {
    const candidates = await getCandidates();
    this.setState({ candidates: candidates });
  }
  renderCandidate(candidate) {
    return (
      <tr key={candidate.id}>
        <td>
          <Link to={"/details/" + candidate.id}>{candidate.name}</Link>
        </td>
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
