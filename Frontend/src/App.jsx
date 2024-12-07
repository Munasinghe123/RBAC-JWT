import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login/Login';
import AdminDashboard from './components/Admin/AdminDashboard';
import FacultyDashboard from './components/Faculty/FacultyDashboard';
import StudentDashboard from './components/Student/StudentDashboard';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import AddUsers from './components/AddUsers/AddUsers';
import ViewUsers from './components/ViewUsers/ViewUsers';
import ViewFaculty from './components/ViewFaculty/ViewFaculty';
import ViewStudents from './components/ViewStudents/ViewStudents';

import { AuthContext } from './context/AuthContext';

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {user ? (
          <>
            {user.role === 'admin' && (
              <>
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/faculty" element={<FacultyDashboard />} />
                <Route path="/student" element={<StudentDashboard />} />
                <Route path="/addUser" element={<AddUsers />} />
                <Route path="/viewUsers" element={<ViewUsers />} />
                <Route path="/viewStudents" element={<ViewStudents />} />
                <Route path="/viewFaculty" element={<ViewFaculty />} />
              </>
            )}

            {user.role === 'faculty' && (
              <Route path="/faculty" element={<FacultyDashboard />} />
            )}

            {user.role === 'student' && (
              <Route path="/student" element={<StudentDashboard />} />
            )}
          </>
        ) : (
          <Route path="*" element={<Navigate to="/" />} />
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>
  );
};

export default App;
