import React, { useState } from 'react'
import './CSS/Auth.css'

const Auth = () => {

  const [state, setState] = useState('Login');
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  })

  const changeHandler = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const login = async () => {
    console.log("Logging in...", formData);  
    let responseData;
    await fetch('https://simple-goods-server.onrender.com/login',{
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json()).then((data) => responseData = data)
    if(responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace('/');
    }
    else {
      alert(responseData.error);
    }  

  }

  const signup = async () => {
    console.log("Signing up...", formData); 
    let responseData;
    await fetch('https://simple-goods-server.onrender.com/signup',{
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json()).then((data) => responseData = data)
    if(responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace('/');
    }
    else {
      alert(responseData.error);
    }

  }

  return (
    <div className='auth'>
      <div className="auth-container">
        <h1>{state}</h1>
        <div className="auth-fields">
          {state === 'Sign Up'?<input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Enter Your Name' />: <></>}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Enter Your Email' />
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Enter Your Password' />
        </div>
        <button onClick={() => {state === 'Login'?login():signup()}}>Continue</button>
        {state === 'Sign Up'?<p className='auth-login'>Already have an account? <span onClick={() => {setState('Login')}}>Login</span></p>: 
        <p className='auth-login'>Create an Account. <span onClick={() => {setState('Sign Up')}}>Click Here</span></p> }       
        <div className="auth-agree">
          <input type="checkbox" name ="" id="" />
          <p>I agree to the Terms and Conditions</p>
        </div>
      </div>
    </div>
  )
}

export default Auth
