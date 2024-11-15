import React, { useState } from 'react';
import './Login.css'; // Make sure the path is correct
import assets from '../../assets/assets';

const Login = ({ setShowLogin }) => {
    const [currentState, setCurrentState] = useState("Login");

    const toggleState = () => {
        setCurrentState(currentState === "Login" ? "Sign up" : "Login");
    };

    return (
        <div className='Login'>
            <form className="login-container">
                <div className='Login-title'>
                    <h2>{currentState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt='Close' />
                </div>
                <div className='Login-Input'>
                    {currentState === "Sign up" && <input type='text' placeholder='Your Name' required />}
                    <input type='email' placeholder='Your Email' required />
                    <input type='password' placeholder='Password' required />
                </div>
                <button type='button' onClick={toggleState}>
                    {currentState === "Sign up" ? "Create Account" : "Login"}
                </button>
                <div className='Login-condition'>
                    <input type='checkbox' required />
                    <p>By continuing, you agree to the terms and conditions.</p>
                </div>
                {currentState === "Login" ? (
                    <p>
                        Create a new Account? 
                        <span onClick={() => setCurrentState("Sign up")} style={{ cursor: 'pointer', color: 'blue' }}> Click here</span>
                    </p>
                ) : (
                    <p>
                        Already have an account? 
                        <span onClick={() => setCurrentState("Login")} style={{ cursor: 'pointer', color: 'blue' }}> Login here</span>
                    </p>
                )}
            </form>
        </div>
    );
}

export default Login;
