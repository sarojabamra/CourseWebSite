import React from 'react';
import './Week.css';

const Week = ({syllabus}) => {
  return (
    <div>
        {syllabus.map((item, i) => (
            <div className='week_card' key={i} >
                <p className='week'>Week {item.week}:</p>
                <h3>{item.topic}</h3>
                <p className='description'>{item.content}</p>
            </div>
        ))}
    </div>
  )
}

export default Week