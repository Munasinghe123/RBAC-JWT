import React from 'react';
import './AddUsers.css';
import { useState } from 'react';
import API from '../../services/api';
import { useNavigate } from 'react-router-dom';

function AddUsers() {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await API.post('/api/auth/register', { name, password, role });
            console.log("user added successfully", response.data)
            alert("user added successfully")

            e.target.reset();

            navigate("/viewUsers");

        } catch (err) {
            console.log("failed to add user", err);
            alert("failed to add user");
        }
    }

    return (
        <div className='add-user-container'>
            <h1>Add users</h1>
            <form className='add-user-form' onSubmit={handleSubmit}>

                <div className="form-group">
                    <label htmlFor='userName'>User Name</label>
                    <input type='text'
                        name='userName'
                        id='userName'
                        required
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor='password'>Password</label>
                    <input type='password'
                        name='password'
                        id='password'
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor='role'>Role</label>
                    <select name="role" id="role" required
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    >

                        <option value="" disabled selected>
                            Select an option
                        </option>
                        <option value="faculty">Faculty</option>
                        <option value="student">Student</option>
                    </select>
                </div>

                <button type='submit' className='submit-button'>Add User</button>

            </form>
        </div>
    );
}

export default AddUsers;
