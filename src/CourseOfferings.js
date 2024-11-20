import React from 'react';
import './App.css';

function CourseOfferings() {
  return (
    <div className="page-container">
      <h2 className="page-title">Course Offerings & Schedule</h2>
      <p className="page-description">Here, you can find the list of courses offered for the current term.</p>
      <table className="course-table">
        <thead>
          <tr>
            <th>Course Code</th>
            <th>Course Name</th>
            <th>Instructor</th>
            <th>Schedule</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="4">No courses available at the moment.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CourseOfferings;
