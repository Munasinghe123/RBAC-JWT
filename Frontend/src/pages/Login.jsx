import React, { useState } from 'react';
import { loginUser } from '../api/authApi';
import { setToken } from '../authutils/authUtils';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const Login = () => {
    const [credentials, setCredentials] = useState({ name: '', password: '' });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await loginUser(credentials);
            setToken(data.token);

            const role = jwtDecode(data.token).role;
            if (role === 'admin') navigate('/admin');
            else if (role === 'manager') navigate('/manager');
            else navigate('/user');
        } catch (error) {
            console.error("Login failed", error.response.data.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={credentials.name}
                onChange={(e) => setCredentials({ ...credentials, name: e.target.value })}
            />
            <input
                type="password"
                placeholder="Password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
