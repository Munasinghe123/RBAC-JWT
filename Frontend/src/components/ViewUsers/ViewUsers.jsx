import React from 'react'
import { Link } from 'react-router-dom'

function ViewUsers() {
    return (
        <div>
            <h1>View Users page</h1>

            <Link to='/viewFaculty'>View Faculty</Link><br /><br />
            <Link to='/viewStudents'>View Students</Link>
        </div>
    )
}

export default ViewUsers
