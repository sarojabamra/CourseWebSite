import React, { useContext } from 'react';
import './SelectedItem.css';
import { CourseContext } from '../../context/CourseContext';
import tick from '../assets/tick.svg';

const SelectedItem = () => {
  const {all_courses, listItems, markAsCompleted} = useContext(CourseContext);

  return (
    <div className='cardlist'>
        
        {all_courses.map((e) => {
          if(listItems[e.id]>0)
          {
            return (
              <div className='card2'>
            <div className='selected grid'>
            <img className="selected_img" src={e.thumbnail}/>
            <div><p>{e.name}</p>
            <p className='instructor'>{e.instructor}</p>
            </div>
            <p className='week progress'>In Progress..</p>
            <p className='duration'>{e.duration}</p>
            <img 
            className='tick'
            src={tick}
            onClick={()=>{markAsCompleted(e.id)}}
            />
            </div>
            </div>
            )
          }
        })}
        
    </div>
  )
}

export default SelectedItem