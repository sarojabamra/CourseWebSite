import React, { useContext } from 'react'
import Navbar2 from '../../components/navbar/Navbar2'
import all_courses from '../../courses/all_courses'
import { useParams } from 'react-router-dom'
import { CourseContext } from '../../context/CourseContext'
import CourseDisplay from '../../components/courseDisplay/CourseDisplay'

const CourseDetails = () => {
const { all_courses } = useContext(CourseContext);
const { courseId } = useParams();
const course = all_courses.find((e) => e.id === Number(courseId));

  return (
    <div id='bg'>
      <div id='bgg'>
      <Navbar2 />
      <div id='background1'>
        <div className='display'>
          <CourseDisplay course={course} />
        </div>
      </div>
      </div>
    </div>
  )
}

export default CourseDetails