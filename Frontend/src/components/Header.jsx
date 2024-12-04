import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
    const { logout, user } = useContext(AuthContext);

    return (
        <header>
            <h1>Welcome, {user ? user.name : 'Guest'}</h1>
            {user && (
                <button onClick={logout}>Logout</button>  // Button to log out
            )}
        </header>
    );
};

export default Header;
