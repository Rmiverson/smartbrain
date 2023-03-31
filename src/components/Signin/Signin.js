import './Signin.scss'
import React, { useState } from 'react'

const Signin = (props) => {
  const [email, setemail] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = (e) => {
    if (e.target.name === 'username') {
      setemail(e.target.value)
    } else if (e.target.name === 'password') {
      setPassword(e.target.value)
    }
  }

  async function postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    return response.json()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    postData('http://localhost:3000/signin', {'email': email, 'password': password})
    .then((data) => {
      console.log(data)

    })
  }

  return (
    <form className='signin' onSubmit={handleSubmit}>
      <label>email</label>
      <input 
        name='email'
        placeholder='email'
        type='email'
        value={email}
        onChange={handleChange}
        required
      />

      <label>Password</label>
      <input 
        name='password'
        placeholder='Password'
        type='password'
        value={password}
        onChange={handleChange}
        minLength='8'
        required
      />
      
      <input 
        className='submit-button'
        type='submit'
        value='Login'
      />
    </form>    
  )
}

export default Signin