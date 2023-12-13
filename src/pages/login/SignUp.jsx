import React from 'react'
import './SignUp.css'
import Navbar2 from '../../components/navbar/Navbar2'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div id='bg'>
      <div id='bgg'>
      <Navbar2 />
      <div className='flex'>
      <div id='modal'>
        <div className='content2'>
        <h1>Sign Up</h1>
        <div className='form'>
        <form>
        <p>Name</p>
          <input />
          <p>Email</p>
          <input />
          <p>Password</p>
          <input type="password" />
        </form>
        <div className='bottom'>
        <button className='orange-bg'>
          Sign Up
        </button>
        <p>Already have an account? <span><Link to='/signin' className="link">Sign In</Link></span></p>
        </div>
        </div>
        </div>
        </div>
        

      </div>
      </div>
    </div>
  )
}

export default SignUp