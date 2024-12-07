import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './Header.css';

const Header = () => {
    const { logout, user } = useContext(AuthContext);

    return (
        <header className="home-header">
            <div className="header-content">
                <div className="Welcome">
                    <h1>Welcome, {user ? user.name : 'Guest'}</h1>
                </div>

                {user ? (
                    <button onClick={logout} className="button-link">Logout</button>
                ) : (
                    <Link to="/login" className="button-link">Login</Link>
                )}
            </div>
        </header>
    );
};

export default Header;
