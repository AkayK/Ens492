import React from 'react';
import './App.css';

function ClassSchedule() {
  return (
    <div className="page-container">
      <h2 className="page-title">Class Schedule</h2>
      <p className="page-description">Here, you can find your current class schedule.</p>
      <table className="course-table">
        <thead>
          <tr>
            <th>Course Code</th>
            <th>Course Name</th>
            <th>Instructor</th>
            <th>Day</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {/* Veriler dinamik olarak buraya eklenecek */}
          <tr>
            <td colSpan="5">No scheduled classes at the moment.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ClassSchedule;
