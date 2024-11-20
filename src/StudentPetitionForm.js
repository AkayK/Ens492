import React from 'react';
import './App.css';

function StudentPetitionForm() {
  return (
    <div className="page-container">
      <h2 className="page-title">Student Petition Form</h2>
      <p className="page-description">
        Submit your petitions and requests directly through this form.
      </p>
      <form className="petition-form">
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="studentID">Student ID:</label>
          <input
            type="text"
            id="studentID"
            placeholder="Enter your student ID"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="petitionType">Petition Type:</label>
          <select id="petitionType" required>
            <option value="">Select petition type</option>
            <option value="academic">Academic</option>
            <option value="financial">Financial</option>
            <option value="personal">Personal</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="details">Details:</label>
          <textarea
            id="details"
            rows="5"
            placeholder="Provide detailed information about your petition"
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          Submit Petition
        </button>
      </form>
    </div>
  );
}

export default StudentPetitionForm;
