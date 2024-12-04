import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Home = () => {
    const { user } = useContext(AuthContext);

    if (user) {
        if (user.role === 'admin') {
            return <Navigate to="/admin" />;
        } else if (user.role === 'manager') {
            return <Navigate to="/manager" />;
        } else if (user.role === 'user') {
            return <Navigate to="/user" />;
        }
    }

    return <div>Welcome to the Home Page

        <Link to='/login'>Login</Link>
    </div>;
};

export default Home;
