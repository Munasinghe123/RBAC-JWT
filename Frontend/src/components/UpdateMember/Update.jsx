import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Update() {
    const { id } = useParams(); // Get the user ID from the URL
    const [user, setUser] = useState(null); // Initialize user state to null
    const [newName, setNewName] = useState(""); // State for updated name
    const navigate = useNavigate(); // For navigating after successful update

    useEffect(() => {
        // Fetch user data by ID
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`http://localhost:7001/api/users/getUserById/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                console.log(response.data); // Check the structure of the response
                setUser(response.data.user); // Set the user data, adjust if necessary
                setNewName(response.data.user.name); // Initialize the name field
            } catch (err) {
                console.error('Error fetching user:', err);
                alert('Failed to fetch user details.');
            }
        };

        fetchUser();
    }, [id]);

    const handleNameChange = (e) => {
        setNewName(e.target.value); // Update the name as the user types
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem('token');
            const updatedUser = {
                name: newName,
            };

            // Send the updated name to the server
            const response = await axios.put(
                `http://localhost:7001/api/users/updateUser/${id}`,
                updatedUser,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (response.status === 200) {
                alert('User details updated successfully!');
                navigate(`/viewUsers`); // Redirect to view page after successful update
            }
        } catch (err) {
            console.error('Error updating user:', err);
            alert('Failed to update user details.');
        }
    };

    if (!user) {
        // Show a loading state while data is being fetched
        return <p>Loading user details...</p>;
    }

    return (
        <div className='update-form'>
            <h1>Update User Details</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input
                    type='text'
                    value={newName} // Bind input value to state
                    onChange={handleNameChange} // Update state when user types
                    required
                />

                <button type='submit'>Update</button>
            </form>
        </div>
    );
}

export default Update;
