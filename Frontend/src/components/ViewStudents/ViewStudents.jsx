import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import './ViewStudents.css'

function ViewStudents() {

    const [user, setUser] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:7001/api/auth/getAllUsers');
                setUser(response.data);
            } catch (err) {
                console.log(err);
                alert('Failed to get the studets');
            }
        }
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
                            {student.map((user) => {
                                return (

                                    <tr key={user._id}>
                                        <td>{user.name}</td>
                                        <td>{user.role}</td>
                                        <td>
                                            <button type='submit' className='update-btn'>Update</button>
                                            <button type='update' className='delete-btn'>Delete</button>
                                        </td>

                                    </tr>

                                );
                            })}
                        </tbody>
                    </table>
                ) : (
                    <p>No users found</p>
                )}

            </div>
        </>
    )
}

export default ViewStudents
