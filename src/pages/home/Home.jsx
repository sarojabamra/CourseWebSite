import React, { useState } from 'react'
import './Home.css'
import Navbar1 from '../../components/navbar/Navbar1'
import image from '../../components/assets/Vector.png'
import home_img from '../../components/assets/Webinar-amico.png'
import { Link } from 'react-router-dom'

const Home = () => {

     

  return (
    <div>
        <div className='bg'>
        <img className="vector" src={image} />
        </div>
        <Navbar1 />
        <div className='home'>
        <div className='content_div'>
            <div className='content'>
                <div>
                <h1 className='learn'>Learn anytime. <br/>
                    anywhere.</h1></div>
                <div><p>Explore our diverse range of courses designed to cater to your interests and aspirations. Browse through the list below or use the search functionality to find the perfect course for you.</p>
                </div>
                <div><p>Explore our Course Catalogue!</p></div>
                <div className='button_div'>
                    <Link to='/courses'><button className='orange-bg'>Courses</button></Link>
                    <Link to='/signup'><button className='dark-outline'>Sign Up</button></Link>

                </div>
            </div>
        </div>
        <div className='img_div'>
        <img className='home_img' src={home_img} />
        </div>
        </div>
        
        
    </div>
  )
}

export default Home