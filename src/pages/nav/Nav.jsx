import React from 'react'
import Navbar3 from '../../components/navbar/Navbar3'
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div id='bg'>
      <div id='bgg'>
      <Navbar3 />
      <div className='nav'>
      <a className='row'><Link to='/'>Home</Link></a>
      <a className='row'><Link to='/courses'>Courses</Link></a>
      <a className='row'><Link to='/dashboard'>Dashboard</Link></a>
      <a className='row'><Link to='/signin'>Sign In</Link></a>
      <a className='row'><Link to='/signup'>Sign Up</Link></a>
      </div>
    </div>
    </div>
  )
}

export default Nav