import React, { useState } from 'react'
import LibraryButton from './LibraryButton'

function LibraryLogin() {

  const [doYouHaveAnAccount, setDoYouHaveAnAccount] = useState(true);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  function switchForm() {
    setDoYouHaveAnAccount(!doYouHaveAnAccount);
  }
  function logAction() {
    alert("this is your username: " + userName + " and this is your password: " + password);
  }

  return (
    <>
      {doYouHaveAnAccount ? (
        <div style={{ border: "3px solid blue", marginTop: "190px" }}>
          <h2>Sign In</h2>
          <label>UserName:</label>
          <input type="text" placeholder='Enter Your username' value={userName} onChange={(e) => setUserName(e.target.value)} /><br />
          <label>Password:</label>
          <input type="password" placeholder='Enter Your password' value={password} onChange={(e) => setPassword(e.target.value)} /><br />
          <LibraryButton buttonLabel="LOGIN" onClickButton={logAction} /> <br />
          <label>New here? </label>
          <LibraryButton buttonLabel="Create Account" onClickButton={switchForm} />
        </div>
      ) : (
        <div style={{ border: "3px solid indigo", marginTop: "190px" }}>
          <h2>Create Account</h2>
          <label>Student ID:</label>
          <input type="text" placeholder='Enter Your Student ID' /><br />
          <label>Email:</label>
          <input type="email" /><br />
          <label>Password:</label>
          <input type="password" /><br />
          <label>Confirm Password:</label>
          <input type="password" /><br />
          <LibraryButton buttonLabel="REGISTER" /> <br />
          <label>Already have an account? </label>
          <LibraryButton buttonLabel="Sign In" onClickButton={switchForm} />
        </div>
      )}
    </>
  )
}

export default LibraryLogin
