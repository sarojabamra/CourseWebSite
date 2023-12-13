import React from 'react';
import './Dashboard.css';
import Navbar2 from '../../components/navbar/Navbar2';
import SelectedItem from '../../components/selectedItem/SelectedItem';

const Dashboard = () => {
  return (
    <div id='bg'>
      <div id='bgg'>
      <Navbar2 />
      <div id='background'>
        <div className='dashboard'>
          <h1>Dashboard</h1>
          
          <p className='instructor'>Your dashboard is designed to make managing your courses seamless and efficient. 
            <br/>Take control of your learning journey here:</p>
            <p className='ongoing'>Your ongoing courses:</p>
            <div className='grid dark1'>
            <p>Course Selected</p>
            <p>Title</p>
            <p className='progress'>Progress</p>
            <p className='duration'>Due In</p>
            <p>Mark as Completed</p>
            </div>
            <SelectedItem />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Dashboard;