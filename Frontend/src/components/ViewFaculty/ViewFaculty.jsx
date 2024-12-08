import React from 'react'

import { useEffect, useState } from 'react';
import axios from 'axios';
import API from '../../services/api';

import './ViewFaculty.css'

function ViewFaculty() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:7001/api/auth/getAllusers');
                setUsers(response.data);
            } catch (err) {
                console.error('Error fetching users:', err);
            }
        };

        fetchUsers();
    }, []);

    // Filter users with role 'faculty'
    const facultyUsers = users.filter((user) => user.role === 'faculty');

    return (
        <div className="table-container">
            <h1>Faculty Users</h1>
            {facultyUsers.length > 0 ? (
                <table className="users-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            {/* <th>Email</th> */}
                            <th>Role</th>
                            <th>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {facultyUsers.map((user) => (
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                {/* <td>{user.email}</td> */}
                                <td>{user.role}</td>
                                <td>
                                    <button type='submit' className='update-btn'>Update</button>
                                    <button type='submit' className='delete-btn'>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No faculty users found.</p>
            )}
        </div>
    );
}

export default ViewFaculty;
