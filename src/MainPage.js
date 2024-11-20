import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function MainPage() {
  const navigate = useNavigate();

  const sectionsTop = [
    { title: 'Course Offerings & Schedule', icon: '📅' , path: '/course-offerings' },
    { title: 'Course List', icon: '📚',path: '/course-list' },
    { title: 'Registration Days & Times', icon: '📆', path: '/registration-days' },
    { title: 'Class Schedule', icon: '📖', path: '/class-schedule' },
    { title: 'Course Registration Status', icon: '✔️', path: '/course-registration-status' },
    { title: 'Final Grades', icon: '📊', path: '/final-grades' },
    { title: 'Course Catalog', icon: '📂', path: '/course-catalog' },
  ];

  const sectionsBottom = [
    { title: 'Final Exam Schedule', icon: '⏰', path: '/final-exam-schedule' },
    { title: 'Academic Transcript', icon: '📜', path: '/academic-transcript' },
    { title: 'Student Petition Form', icon: '📋', path: '/student-petition-form' },
    { title: 'Degree Evaluation', icon: '🎓', path: '/degree-evaluation' }

  ];

  const handleNavigation = (path) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <div className="main-menu main-page">
      <div className="language-switch">
        <a href="#">English</a> | <a href="#">Türkçe</a>
      </div>
      <h1>Course Registration</h1>

      {/* Orta satırdaki kutucuklar */}
      <div className="menu-grid middle-row">
        {sectionsTop.map((section, index) => (
          <div
            className="menu-item"
            key={index}
            onClick={() => handleNavigation(section.path)}
            style={{ cursor: section.path ? 'pointer' : 'default' }}
          >
            <div className="icon">{section.icon}</div>
            <div className="title">{section.title}</div>
          </div>
        ))}
      </div>

      {/* Alt satırdaki kutucuklar */}
      <div className="menu-grid bottom-row">
        {sectionsBottom.map((section, index) => (
          <div className="menu-item" key={index}>
            <div className="icon">{section.icon}</div>
            <div className="title">{section.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainPage;
