import React, { useEffect ,useState} from 'react'
import ProfileCard from '../components/ProfileCard'
import NavCard from '../components/NavCard';
import CourseCard from '../components/CourseCard';
import { client, builder } from '../api/SanityClient';

export default function HomePage() {
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    const query = '*[_type == "courses"]';
    const courses = await client.fetch(query);
    setCourses(courses);
    console.log(courses);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    
    <div className={`grid-cols-1 grid md:grid-cols-4 gap-8 m-0 h-full p-4  fixed w-full `} style={{ height: '100%' }}>
      <div className='hidden md:block gap-4 col-span-1'>
        {/* profile and nav */}
        <ProfileCard />
        <NavCard />
      </div>

      
      <div className='gap-4 w-full col-span-3  mb-5 my-4 shadow-lg mr-5'>
        <div className='mb-4  overflow-y-auto overflow-x-hidden p-4 flex flex-wrap gap-2'
        style={{
          scrollbarWidth: 'none',
          height:'80vh'
        }}
        >

          {courses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>
      </div>

      {/* <div className='mr-2 hidden md:block'>

        search and trending 
      </div> */}
    </div>
  )
}
