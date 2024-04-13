import React, { useEffect, useState } from 'react'
import ProfileCard from '../components/ProfileCard'
import NavCard from '../components/NavCard';
import CourseCard from '../components/CourseCard';
import { client, builder } from '../api/SanityClient';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loadar from '../components/Loadar';
export default function CoursePage() {
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const fetchCourses = async () => {
        if (!localStorage.getItem('token')) {
            toast.error('Please login to view courses');
            navigate('/login');
            return;
        }
        // filter by category where category is web development
        // const query = `*[_type == "courses" && category == "web development"] `;

        const query = `*[_type == "courses"]`;
        const courses = await client.fetch(query);
        setCourses(courses);
        setLoading(false);
        // console.log(courses);
    };

    useEffect(() => {
        fetchCourses();
    }, []);

    return (

        <div className='gap-4 w-full col-span-3  mb-5 my-4 shadow-lg mr-5'>

            {
                loading ? <Loadar /> :
                    <>

                        <h2 className='text-3xl font-bold text-gray-800 p-y-4 text-center'>
                            All Courses
                        </h2>
                        {/* // seach bar */}




                        <div className='my-4  overflow-y-auto overflow-x-hidden p-4 flex flex-wrap gap-4'
                            style={{
                                scrollbarWidth: 'none',
                                height: '80vh'
                            }}
                        >

                            {courses.map((course) => (
                                <CourseCard key={course._id} course={course} />
                            ))}
                        </div>
                    </>

            }

        </div>
    )
}
