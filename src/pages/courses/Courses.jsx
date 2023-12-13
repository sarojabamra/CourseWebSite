import React from 'react'
import './Courses.css'
import Navbar2 from '../../components/navbar/Navbar2';
import all_courses from '../../courses/all_courses';
import CourseItem from '../../components/courseItem/CourseItem';
import { useState } from 'react';
import search from '../../components/assets/search.svg';

const Courses = () => {

  const [search1, setSearch1] = useState('');
  const [search2, setSearch2] = useState('');

  return (
    
    <div id='bg1'>
    <div id='bgg'>
      <Navbar2 />
      <div id='background1'>
        <div className='courses'>
          <div className='course_div'>
          <div><h1 className='course_title'>Course Catalogue</h1>
          </div>
          <div>
          <form className='searching'>
            <div className='input1'>
            <img className="search1" src={search} height="18px" width="18px"/>
            <input 
            onChange={(e) => setSearch1(e.target.value)}
            placeholder='Search by course name...'/>
            </div>
            <div className='input2'>
            <img className="search2" src={search} height="18px" width="18px"/>
            <input 
            onChange={(e) => setSearch2(e.target.value)}
            placeholder='Search by instructor...'/>
            </div>
          </form>
          </div>
          </div>
          <div className='course_items'>
            {all_courses
            .filter((item) => {
              return search1.toLowerCase() === ''
              ? item
              : item.name.toLowerCase().includes(search1);
            })
            .filter((item) => {
              return search2.toLowerCase() === ''
              ? item
              : item.instructor.toLowerCase().includes(search2);
            })
            .map((item, i)=>{
              return <CourseItem 
              key={i} 
              id={item.id} 
              thumbnail={item.thumbnail}
              name={item.name}
              instructor={item.instructor}
              description={item.description}
              
              />
            })}

          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Courses