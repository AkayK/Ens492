import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import MainPage from './MainPage';
import CourseOfferings from './CourseOfferings'; 
import CourseList from './CourseList'; 
import RegistrationDays from './RegistrationDays';
import ClassSchedule from './ClassSchedule';
import CourseRegistrationStatus from './CourseRegistrationStatus';
import FinalGrades from './FinalGrades';
import CourseCatalog from './CourseCatalog';
import FinalExamSchedule from './FinalExamSchedule';
import AcademicTranscript from './AcademicTranscript';
import StudentPetitionForm from './StudentPetitionForm';
import DegreeEvaluation from './DegreeEvaluation';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    navigate('/main'); // Login başarılıysa ana menüye yönlendir
  };

  return (
    <div className="login-container login-page">
      <div className="top-right-links">
        <a href="#">Browse Course Catalog</a>
        <a href="#">SIS Help</a>
      </div>
      <form className="login-form" onSubmit={handleLoginSubmit}>
        <h2>Student Information System</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>
        <button type="submit">Log In</button>
        <button type="button" onClick={() => navigate('/register')} className="sign-up-button">Sign Up</button>
      </form>
    </div>
  );
}

function RegistrationPage() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dob, setDob] = useState('');
  const [country, setCountry] = useState('');
  const navigate = useNavigate();

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    console.log('Date of Birth:', dob);
    console.log('Country:', country);
    navigate('/main'); // Kayıt başarılıysa ana menüye yönlendir
  };

  return (
    <div className="registration-container registration-page">
      <form className="registration-form" onSubmit={handleRegistrationSubmit}>
        <h2>Registration</h2>
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Full Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder="Confirm Password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country:</label>
          <select
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          >
            <option value="">Select Country</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
            <option value="Australia">Australia</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button type="submit">Register</button>
        <button type="button" onClick={() => navigate('/')} className="login-button">Log In</button>
      </form>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/course-offerings" element={<CourseOfferings />} /> 
        <Route path="/course-list" element={<CourseList />} /> 
        <Route path="/registration-days" element={<RegistrationDays />} />
        <Route path="/class-schedule" element={<ClassSchedule />} />
        <Route path="/course-registration-status" element={<CourseRegistrationStatus />} />
        <Route path="/final-grades" element={<FinalGrades />} />
        <Route path="/course-catalog" element={<CourseCatalog />} />
        <Route path="/final-exam-schedule" element={<FinalExamSchedule />} />
        <Route path="/academic-transcript" element={<AcademicTranscript />} />
        <Route path="/student-petition-form" element={<StudentPetitionForm />} />
        <Route path="/degree-evaluation" element={<DegreeEvaluation />} />
      </Routes>
    </Router>
  );
}

export default App;
