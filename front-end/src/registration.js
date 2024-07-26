import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Registration = () => {

  const [registrationData,setRegistrationData] = useState({
    username:'',
    password:'',
  })

  const handleRegisterChange = (e)=>{
    const {name,value} = e.target;
    setRegistrationData((prevData)=>({
      ...prevData,
      [name]:value,
    }))
  }

  const handleRegisterSubmit = async(e)=>{
    e.preventDefault();

    try{
      const response = await axios.post('http://localhost:8000/register',registrationData);
      console.log(response.data);
    }
    catch(error){
      console.log(error);
    }

    setRegistrationData({
      username:'',
      password:'',
    })

  }
  
  return (
    <div>
      <h1>Registration form</h1>
      <form onSubmit={handleRegisterSubmit}>
        Username:
        <input 
        type='text'
        placeholder='Enter Username'
        name='username'
        value={registrationData.username}
        onChange={handleRegisterChange}
        required
        />
        <br/>
        Password:
        <input 
        type='password'
        placeholder='Enter Password'
        name='password'
        value={registrationData.password}
        onChange={handleRegisterChange}
        required
        />
        <br/>
        <button type='submit'>Register</button>
        <br/>
        <p>
          Already Registerd?
          <Link to='/login'>Login Here</Link>
        </p>
      </form>
    </div>
  )
}

export default Registration