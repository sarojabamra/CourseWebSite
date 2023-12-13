import React from 'react'
import './SignIn.css'
import Navbar2 from '../../components/navbar/Navbar2'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <div id='bg'>
      <div id='bgg'>
      <Navbar2 />
      <div className='flex'>
      <div id='modal1'>
        <div className='content2'>
        <h1>Sign In</h1>
        <div className='form'>
        <form>
          <p>Email</p>
          <input />
          <p>Password</p>
          <input type="password" />
        </form>
        <div className='bottom'>
        <button className='orange-bg'>
          Sign In
        </button>
        <p>Don't have an account? <span><Link className="link" to='/signup'>Sign Up</Link></span></p>
        </div>
        </div>
        </div>
        </div>
        

      </div>
      </div>
    </div>
  )
}

export default SignIn