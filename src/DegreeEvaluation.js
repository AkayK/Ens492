import React from 'react';
import './App.css';

function DegreeEvaluation() {
  return (
    <div className="page-container">
      <h2 className="page-title">Degree Evaluation</h2>
      <p className="page-description">
        View your degree evaluation to track your academic progress and requirements.
      </p>
      <table className="evaluation-table">
        <thead>
          <tr>
            <th>Requirement</th>
            <th>Status</th>
            <th>Credits Earned</th>
            <th>Credits Required</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="4">No degree evaluation data available at the moment.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DegreeEvaluation;
