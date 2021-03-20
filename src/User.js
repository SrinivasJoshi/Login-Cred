import React from 'react'

function User({handleLogout}) {
    return (
        <div>
            <h1>welcome</h1>
            <a onClick={handleLogout}>Logout</a>
        </div>
    )
}

export default User
