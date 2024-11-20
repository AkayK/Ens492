import React from 'react';
import './App.css';

function AcademicTranscript() {
  return (
    <div className="page-container">
      <h2 className="page-title">Academic Transcript</h2>
      <p className="page-description">
        View your academic transcript including completed courses and grades.
      </p>
      <table className="course-table">
        <thead>
          <tr>
            <th>Course Code</th>
            <th>Course Name</th>
            <th>Semester</th>
            <th>Grade</th>
            <th>Credits</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="5">No transcript data available at the moment.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AcademicTranscript;
