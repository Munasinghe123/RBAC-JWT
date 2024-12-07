import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <>
            <h1>Welcome Admin</h1>

            <Link to="/faculty">faculty</Link> <br /><br />
            <Link to="/student">student</Link><br /><br />
            <Link to="/addUser"> add user</Link> <br /><br />
            <Link to="/viewUsers">view user</Link><br /><br />
        </>
    )
};

export default AdminDashboard;
