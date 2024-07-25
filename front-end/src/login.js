import React, { useState } from 'react';
import {Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

  const [LoginData,setLoginData] = useState({
    username:'',
    password:'',
  })

  const handleLoginChange = (e)=>{
    const {name,value} = e.target; 
    setLoginData((prevData)=>({
      ...prevData,
      [name] : value
    }))
  }

  const handleLoginSubmit=async(e)=>{
    e.preventDefault();

    try{
      const response = await axios.post('http://localhost:8000/login',LoginData);

      const {success,message} = response.data;

      if(success)
      {
        console.log('Login Successfully');
      }
      else{
        console.log(message);
      }
    }
    catch(error){
      console.error('Login error',error);
    }

    setLoginData({
      username:'',
      password:'',
    })
  }

  return (
    <div>
        <h1>Login Page</h1>
        <form onSubmit={handleLoginSubmit}>
          Username:
          <input 
          type='text' 
          name='username'
          placeholder='Username' 
          required
          value={LoginData.username}
          onChange={handleLoginChange}
          />
          <br/>
          Password:
          <input 
          type='password' 
          name='password'
          placeholder='Password' 
          required
          value={LoginData.password}
          onChange={handleLoginChange}
          />
          <button type='submit'>Login</button>
          <br />
          <p>
          Not Registerd yet?
          <Link to ='/registration'>Register Here</Link>
          </p>
        </form>
    </div>
  )
}

export default Login