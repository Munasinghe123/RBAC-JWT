
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ViewStudents.css';

function ViewStudents() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const token = localStorage.getItem('token'); // Get the token from localStorage
                const response = await axios.get('http://localhost:7001/api/users/getAllUsers', {
                    headers: {
                        Authorization: `Bearer ${token}`, // Attach the token to the request
                    }
                });
                setUser(response.data);
            } catch (err) {
                console.log(err);
                alert('Failed to get the students');
            }
        };
        fetchUsers();
    }, []);

    const student = user.filter((u) => u.role === 'student');
    return (
        <>
            <h1>Registered students</h1>
            <div className='table-container'>
                {student.length > 0 ? (
                    <table className='users-table'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Role</th>
                                <th>Operations</th>
                            </tr>
                        </thead>
                        <tbody>
                            {student.map((user) => (
                                <tr key={user._id}>
                                    <td>{user.name}</td>
                                    <td>{user.role}</td>
                                    <td>
                                        <button type='submit' className='update-btn'>Update</button>
                                        <button type='update' className='delete-btn'>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No users found</p>
                )}
            </div>
        </>
    );
}

export default ViewStudents;
