import React, { useContext } from 'react';
import './CourseDisplay.css';
import Prerequisites from '../prerequisites/Prerequisites';
import Week from '../week/Week';
import { CourseContext } from '../../context/CourseContext';
import LikeButton from '../likeFeature/LikeButton';

const CourseDisplay = (props) => {
    const { course } = props;

    const {addToList} = useContext(CourseContext);

  return (
    <div className='coursedisplay'>
        <div className='course_img'>
            <img src={course.thumbnail} alt="" />
        </div>
        <div>
        <div className='column'>
        <div className='left'>
          <div>
            <h1 className='title'>{course.name}</h1>
  
            </div>
                <p className='instructor'>{course.instructor}</p>
                <div className='column week'>
                <p className='weeks'>{course.duration}</p>
                <p className='location'>{course.location}</p>
                </div>
                <LikeButton className="likebtn" postId={course.id}/>
                <p className='description'>{course.description}</p>
                
                
                <p className='schedule'>[{course.schedule}]</p>
                <p className='status'>{course.enrollmentStatus}</p>
                <Prerequisites prerequisites={course.prerequisites}/>
                
            
        </div>
        <div className='right'>
        <button
        onClick={()=>{addToList(course.id)}}
        className='orange-bg enroll'>Enroll now</button>
        </div>
        </div>
        <div className='syllabuscards'>
        <Week className="weekcard" syllabus={course.syllabus}/>
        </div>
        </div>
        
        
    </div>
  )
};

export default CourseDisplay;