import React from "react";
import { Candidates } from "./Candidates";
import { CandidateDetails } from "./CandidateDetails";
import { Route } from "react-router-dom";
export function App() {
  return (
    <>
      <Route path="/">
        <Candidates />
      </Route>

      <Route path="/details">
        <CandidateDetails />
      </Route>
    </>
  );
}
