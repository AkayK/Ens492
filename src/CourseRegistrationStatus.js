import React from 'react';
import './App.css';

function CourseRegistrationStatus() {
  return (
    <div className="page-container">
      <h2 className="page-title">Course Registration Status</h2>
      <p className="page-description">
        Here you can check the status of your course registrations.
      </p>
      <table className="course-table">
        <thead>
          <tr>
            <th>Course Code</th>
            <th>Course Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="3">No registration data available at the moment.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CourseRegistrationStatus;
