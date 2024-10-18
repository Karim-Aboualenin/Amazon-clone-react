import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';          
import './CreateAccount.css';                      
import logo from './amazon-logo.png';             

function CreateAccount() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.mobile.trim()) newErrors.mobile = "Mobile number is required";
    if (!formData.password.trim()) newErrors.password = "Password is required";
    if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";

    const phoneRegex = /^[0-9]{10,15}$/;
    if (!phoneRegex.test(formData.mobile)) newErrors.mobile = "Invalid mobile number";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
      
      const userExists = existingUsers.some(user => user.mobile === formData.mobile);
      
      if (userExists) {
        alert('User already exists. Please login.');
        navigate('/login');                 
      } else {
        existingUsers.push({
          name: formData.name,
          mobile: formData.mobile,
          password: formData.password,
        });
        localStorage.setItem('users', JSON.stringify(existingUsers));

        alert('Account created successfully. You can now log in.');
        navigate('/');           
      }
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="create-account-container">
           <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon Logo"  
             className="amazon-logo" />
      
      <div className="create-account-box">
        <h2>Create Account</h2>
        
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Your name</label>
          <input 
            type="text" 
            id="name" 
            placeholder="First and last name" 
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error-text">{errors.name}</p>}

          <label htmlFor="mobile">Mobile number</label>
          <div className="mobile-input">
            <select id="country-code">
              <option value="EG">EG +20</option>
              <option value="Italy">Italy+39</option>
              <option value="Iran">Iran+98 </option>
              <option value="Spain">Spain+34</option>
              <option value="Russia">Russia+7</option>
              <option value="Peru">Peru+51</option>

            </select>
            <input 
              type="text" 
              id="mobile" 
              placeholder="Mobile number" 
              value={formData.mobile}
              onChange={handleChange}
            />
          </div>
          {errors.mobile && <p className="error-text">{errors.mobile}</p>}

          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            placeholder="At least 6 characters" 
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error-text">{errors.password}</p>}

          <label htmlFor="confirmPassword">Re-enter password</label>
          <input 
            type="password" 
            id="confirmPassword" 
            placeholder="Re-enter password" 
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}

          <p className="verification-text">
            To verify your number, we will send you a text message with a temporary code. Message and data rates may apply.
          </p>

          <button type="submit" className="verify-button">Verify mobile number</button>
        </form>
        
        <p className="sign-in-link">
          Already have an account? <a href="/login">Sign in</a>
        </p>
        <p>
          By creating an account, you agree to Amazon's{' '}
          <a href="#">Conditions of Use</a> and{' '}
          <a href="#">Privacy Notice</a>.
        </p>

      </div>
    </div>
  );
}

export default CreateAccount;
