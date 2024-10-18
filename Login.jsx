import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';            
import './Login.css';           
import logo from './amazon-logo.png';                

function Login() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    
    const user = existingUsers.find(user => user.mobile === emailOrPhone && user.password === password);
    
    if (user) {
      alert(`Welcome back, ${user.name}`);
      navigate('/');                              
    } else {
      alert("User not found. Please create an account.");
      navigate('/CreateAccount');                    
    }
  };

  return (
    <div className="login-container">
           <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon Logo" 
           className="amazon-logo" />
      
      <div className="login-box">
        <h2>Sign in</h2>
        
        <form onSubmit={handleSubmit}>
          <label htmlFor="emailOrPhone">Email or mobile phone number</label>
          <input 
            type="text" 
            id="emailOrPhone" 
            value={emailOrPhone} 
            onChange={(e) => setEmailOrPhone(e.target.value)}
          />
          
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="error-text">{error}</p>}
          
          <button type="submit" className="login-button">Continue</button>
        </form>

        <p className="terms-text">
          By signing in, you agree to Amazon's 
          <a href="#"> Conditions of Use</a> and 
          <a href="#"> Privacy Notice</a>.
        </p>

        <a href="#" className="help-link">Need help?</a>
        
        <hr />

        <p className="new-text">New to Amazon?</p>
        <a href="/CreateAccount" className="create-account-link">Create your Amazon account</a>
      </div>
    </div>
  );
}

export default Login;
