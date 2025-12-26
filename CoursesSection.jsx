import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import CourseCard from './CourseCard';
const CoursesSection = () => {

  const {allCourses} = useContext(AppContext);

  return (
    <div className='courseSection'>
   <h2 className='text-3xl font-medium text-gray-800'>Learn from the best</h2>
   <p className=' text-sm md:text-base text-gray-500'> Discover our top-rated courses across various categories.From coding and design to business <br /> and wellness, our courses are crafted to deliver results.</p>

   <div className='courseList'>
    {/* {allCourses.slice(0,4).map((course, index)=> <CourseCard key={index} course={course}/>)} */}
    {(allCourses || []).slice(0, 4).map((course) => (
  <CourseCard key={course._id} course={course} />
))}

   </div>
 
   <Link to={'/course-list'} onClick={()=> window.scrollTo(0,0)}>Show all courses</Link>
    </div>
  )
}

export default CoursesSection
