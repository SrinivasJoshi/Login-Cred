import React,{useState} from 'react'

function User(props) {
    const {handleLogout,toggleDiv,toggle,setNewPassword,resetPass} = props;
    
    return (
        <section className="hero">
            <nav>
                <h2>Welcome</h2>
                <div className="navitems">
                    <button onClick={handleLogout}>Logout</button>
                    <button onClick={toggleDiv}>Change Password</button>
                </div>
            </nav>
            {toggle?
                (<div className="newpass-div">
                    <h2>Change Password</h2>
                    <input type="text" placeholder="New Password"
                    onChange={e => setNewPassword(e.target.value)}
                    />
                    <button onClick={resetPass}>Confirm</button>
                </div>):
                (<p></p>)
            }
        </section>
    )
}

export default User
