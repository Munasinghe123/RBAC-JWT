import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login/Login';
import AdminDashboard from './components/Admin/AdminDashboard';
import ManagerDashboard from './components/Manager/ManagerDashboard';
import UserDashboard from './components/User/UserDashboard';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
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
                <Route path="/manager" element={<ManagerDashboard />} />
                <Route path="/user" element={<UserDashboard />} />
              </>
            )}

            {user.role === 'manager' && (
              <Route path="/manager" element={<ManagerDashboard />} />
            )}

            {user.role === 'user' && (
              <Route path="/user" element={<UserDashboard />} />
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
