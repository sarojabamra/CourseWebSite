
import './App.css';
import Home from './pages/home/Home';
import Courses from './pages/courses/Courses';
import Dashboard from './pages/dashboard/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CourseDetails from './pages/coursedetails/CourseDetails';
import SignIn from './pages/login/SignIn';
import SignUp from './pages/login/SignUp';
import Nav from './pages/nav/Nav';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/course' element={<CourseDetails />}>
          <Route path=':courseId' element={<CourseDetails />}/>
        </Route>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/nav' element={<Nav />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
