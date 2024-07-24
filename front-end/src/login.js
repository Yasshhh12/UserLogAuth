import React, { useState } from 'react'

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

  return (
    <div>
        <h1>Login Page</h1>
        <form>
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
        </form>
    </div>
  )
}

export default Login