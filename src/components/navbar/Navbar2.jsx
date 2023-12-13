import React from 'react'
import './Navbar2.css'
import { Link } from 'react-router-dom'

import bars from '../assets/bars-solid.svg';

const Navbar2 = () => {

  return (
    <div className='navbar'>
      <div className='logo2 left1'><h1>CourseWave</h1></div>

      <div className='right1'>
      <input type="checkbox" id="check"/>
            <label for="check" className='checkbtn'>
            <Link to='/nav'><img src={bars}/></Link>
            </label>
      <div className='nav_menu'>
          
        
          <a className='margin'><Link to='/'>Home</Link></a>
          <a className='margin'><Link to='/courses'>Courses</Link></a>
          <a className='margin'><Link to='/dashboard'>Dashboard</Link></a>
          <a><Link to='/signin'><button className='btn1'>Sign In</button></Link></a>
          <a><Link to='/signup'><button className='outline btn2'>Sign Up</button></Link></a>
        
      </div>
      </div>
    </div>
  )
}

export default Navbar2