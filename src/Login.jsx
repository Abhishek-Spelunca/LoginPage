import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="Password" placeholder="********" id="password" name="password" />
                <div class="tacbox">
                  <input id="checkbox1" type="checkbox"/>
                  <label for="checkbox1">Remember Me</label><br></br>
                  <input id="checkbox" type="checkbox" />
                  <label for="checkbox"> I agree to these <a href="#">Terms and Conditions</a>.</label>
                </div>
                <button type="submit">Log In</button>
            </form>

            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}