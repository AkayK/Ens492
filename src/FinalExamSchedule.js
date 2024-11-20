import React from 'react';
import './App.css';

function FinalExamSchedule() {
  return (
    <div className="page-container">
      <h2 className="page-title">Final Exam Schedule</h2>
      <p className="page-description">
        Find the schedule for your upcoming final exams.
      </p>
      <table className="course-table">
        <thead>
          <tr>
            <th>Course Code</th>
            <th>Course Name</th>
            <th>Exam Date</th>
            <th>Exam Time</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="5">No final exams scheduled at the moment.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default FinalExamSchedule;
