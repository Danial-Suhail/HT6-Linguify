// SignUpPage.js
import React, { useState } from 'react';
import './SignUpPage.css';

function SignUpPage({ isOpen , storedSignUpData }) {

  const [signUpData, setSignUpData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [signInData, setSignInData] = useState({
    email: '',
    password: '',
  });
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSignUpSubmit = (e) => {
    e.preventDefault();

    console.log('Sign Up Data:', signUpData);
    
    setSignUpData({
      username: '',
      email: '',
      password: '',
    });
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();

  const matchedUser = storedSignUpData.find(
    (user) =>
      user.email === signInData.email && user.password === signInData.password
  );

  if (matchedUser) {
    setLoggedIn(true);
  } else {
    alert('Invalid email or password');
  }

  // Clear the sign-in form after submission
  setSignInData({
    email: '',
    password: '',
  });
};

  if (!isOpen) {
    return null;
  }

  if (loggedIn) {
    return <div>Welcome, {signInData.email}!</div>;
  }
    
  return (
    <div className="signup-page">
      <h2 className="Title">Sign Up</h2>
      <form onSubmit={handleSignUpSubmit}>
        <input type="text" placeholder="Username"></input>
        <input type="email" placeholder="Email" value={signUpData.email}
          onChange={(e) =>
            setSignUpData({ ...signUpData, email: e.target.value })
          }></input>
        <input type="password" placeholder="Password" value={signUpData.password}
          onChange={(e) =>
            setSignUpData({ ...signUpData, password: e.target.value })
          }></input>
        <button class="submit-button" type="submit">Sign Up</button>
      </form>
      <h2 className="Title">Sign In</h2>
        <form onSubmit={handleSignInSubmit}>
        <input type="email" placeholder="Email"></input>
        <input type="password" placeholder="Password"></input>
        <button class="submit-button" type="submit">Sign In</button>

        </form>
    </div>
  );
}

export default SignUpPage;