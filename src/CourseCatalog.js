import React from 'react';
import './App.css';

function CourseCatalog() {
  return (
    <div className="page-container">
      <h2 className="page-title">Course Catalog</h2>
      <p className="page-description">
        Explore the available courses for the current academic year.
      </p>
      <table className="course-table">
        <thead>
          <tr>
            <th>Course Code</th>
            <th>Course Name</th>
            <th>Department</th>
            <th>Credits</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="4">No courses available in the catalog at the moment.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CourseCatalog;
