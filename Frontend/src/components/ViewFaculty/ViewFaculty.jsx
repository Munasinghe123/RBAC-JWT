import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ViewFaculty.css';

function ViewFaculty() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:7001/api/users/getAllusers', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });
                setUsers(response.data);
            } catch (err) {
                console.error('Error fetching users:', err);
            }
        };

        fetchUsers();
    }, []);

    // Filter users with role 'faculty'
    const facultyUsers = users.filter((user) => user.role === 'faculty');

    // Delete function
    const deleteMember = async (id) => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.delete(`http://localhost:7001/api/users/deleteMember/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.status === 200) {
                setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
                alert('Member successfully deleted.');
            }
        } catch (err) {
            console.error('Error deleting member:', err);
            alert('Failed to delete the member. Please try again.');
        }
    };

    return (
        <div className="table-container">
            <h1>Faculty Users</h1>
            {facultyUsers.length > 0 ? (
                <table className="users-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {facultyUsers.map((user) => (
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.role}</td>
                                <td>
                                    <Link to={`/update/${user._id}`}>
                                        <button type="submit" className="update-btn">Update</button>
                                    </Link>

                                    <button
                                        type="submit"
                                        className="delete-btn"
                                        onClick={() => deleteMember(user._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No faculty users found.</p>
            )
            }
        </div >
    );
}

export default ViewFaculty;
