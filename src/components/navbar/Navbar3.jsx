import React from 'react'
import { Link } from 'react-router-dom'
import bars from '../assets/bars-solid.svg'

const Navbar3 = () => {
  return (
    <div className='navbar'>
      <div className='logo2 left1'><h1>CourseWave</h1></div>

      <div className='right1'>
      <input type="checkbox" id="check"/>
            <label for="check" className='checkbtn'>
            <Link to='/nav'><img src={bars}/></Link>
            </label>
      <div className='nav_menu'>
          
        
          
      </div>
      </div>
    </div>
  )
}

export default Navbar3