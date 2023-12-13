import React from 'react';
import './CourseItem.css';
import { Link } from 'react-router-dom';

const CourseItem = (props) => {
  return (
    <div className='cardlist'>
        <div className='card'>
            <div className='preview-content'>
            <div className='preview'>
                <div className='img_text'>
                  <div className='imgdiv'>
                  <img className='item_img' src={props.thumbnail} alt="" />
                  </div>
                  <div className='text'>
                    <h3><Link to={`/course/${props.id}`} className='link'>{props.name}</Link></h3>
                    <p className='instructor'>{props.instructor}</p>
                    <p className='description'>{props.description}</p>
                  </div>
                </div>
            </div>
            <div className='detail_button'>
            <Link to={`/course/${props.id}`} ><button className='orange-bg2'>
                Details
            </button></Link>
            </div>
            </div>
        </div>
    </div>
  )
}

export default CourseItem