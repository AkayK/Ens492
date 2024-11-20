import React from 'react';
import './App.css';

function FinalGrades() {
  return (
    <div className="page-container">
      <h2 className="page-title">Final Grades</h2>
      <p className="page-description">
        Here you can see your final grades for the completed courses.
      </p>
      <table className="course-table">
        <thead>
          <tr>
            <th>Course Code</th>
            <th>Course Name</th>
            <th>Grade</th>
            <th>Credits</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="4">No final grades available at the moment.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default FinalGrades;
