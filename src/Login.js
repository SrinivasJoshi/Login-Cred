import React from 'react';


const Login = () => {
    return (
        <div className="Login">
            <div className="one">
                <h2>Login for Professionals</h2>
                <form action="">
                    <input type="text" name="Id" placeholder="Id" />
                    <input type="text" name="Password" placeholder="Password" />
                    <button type="submit">Login</button>
                </form>
            </div>
            <div className="two">
                <h2>Login for College Students</h2>
                <form action="">
                    <input type="text" name="Id" placeholder="Id" />
                    <input type="text" name="Password" placeholder="Password" />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
