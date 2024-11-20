import React from 'react';
import './App.css';

function RegistrationDays() {
  return (
    <div className="registration-days-container">
      <h1>Registration Days & Times</h1>
      <p>Here you can find the registration periods for the upcoming terms.</p>
      {/* Tablo boş placeholder olarak görüntülenecek */}
      <div className="registration-table-placeholder">
        <table className="registration-table">
          <thead>
            <tr>
              <th>Term</th>
              <th>Start Date</th>
              <th>End Date</th>
            </tr>
          </thead>
          <tbody>
            {/* Placeholder data olmadan, sadece tablo yapısı gösteriliyor */}
            <tr>
              <td colSpan="3" style={{ textAlign: 'center', padding: '20px' }}>
                No registration periods available at the moment.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RegistrationDays;
