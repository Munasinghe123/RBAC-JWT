import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <>
            <h1>Welcome Admin</h1>

            <Link to="/manager">manager</Link> <br></br>
            <Link to="/user">user</Link>
        </>
    )
};

export default AdminDashboard;
