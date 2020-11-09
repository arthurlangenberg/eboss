import React from "react";
import { getCandidateById } from "./api/candidatesApi";

export class CandidateDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      candidate: null,
    };
  }

  async componentDidMount() {
    const candidate = await getCandidateById(
      this.props.match.params.candidateId
    );
    this.setState({ candidate: candidate });
  }

  render() {
    if (this.state.candidate === null) return null;
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
          <tbody>{this.state.candidate.name}</tbody>
        </table>
      </React.Fragment>
    );
  }
}
