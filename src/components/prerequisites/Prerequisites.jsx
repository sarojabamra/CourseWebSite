import React from 'react'
import './Prerequisites.css'

const Prerequisites = ({prerequisites}) => {
  return (
    <div className='pre'>
        <p>Prerequisites:</p>
        {prerequisites.map((prerequisite, index) => (
            <div className='prerequisite'>
            <p key={index}>{prerequisite}</p>
            </div>
        ))} 
    </div>
  )
}

export default Prerequisites