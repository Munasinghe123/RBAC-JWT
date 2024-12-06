import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './Header.css'; 

const Header = () => {
    const { logout, user } = useContext(AuthContext);

    return (
        <header className="home-header">
            <h1>Welcome, {user ? user.name : 'Guest'}</h1>
            {!user ? (
                
                <Link to="/login" className="button-link">Login</Link>
            ) : (
                
                <button onClick={logout} className="button-link">Logout</button>
            )}
        </header>
    );
};

export default Header;
