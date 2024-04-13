import React, { useEffect, useState } from "react";
import ProfileCard from "../components/ProfileCard";
import NavCard from "../components/NavCard";
import CourseCard from "../components/CourseCard";
import { client, builder } from "../api/SanityClient";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loadar from "../components/Loadar";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
export default function HomePage() {
  const [courses, setCourses] = useState([]);
  const [dummyCourses, setDummyCourses] = useState([]);
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


    let category = localStorage.getItem('role');
    const query = `*[_type == "courses" && category =="${category}"]`;
    const courses = await client.fetch(query);
    setCourses(courses);
    setDummyCourses(courses);
    setLoading(false);
    // console.log(courses);
  };
  const [searchValue, setSearchValue] = useState('');

  const search=(e)=>{

    console.log(e.target.value);
    let searchValue = e.target.value;
    setSearchValue(searchValue);
    let filteredCourses = dummyCourses.filter((course)=>course.title.toLowerCase().includes(searchValue.toLowerCase()));
    setCourses(filteredCourses);


  }

  useEffect(() => {
    fetchCourses();
  }, []);

  return (

      <div className="gap-4 w-full col-span-3  mb-5 my-4 shadow-lg mr-5">
        {loading ? (
          <Loadar />
        ) : (
          <>
            <div className="flex justify-center w-4/5 gap-8 my-8 ml-4">
              <input
                type="text"
                className="flex-grow rounded-full h-9 py-2 p-3 px-4 border-2 border-black shadow-md"
                placeholder="Search for courses"
                value={searchValue}
                onChange={(e)=>search(e)}
              />
              <MagnifyingGlassIcon  className="h-8 w-8 text-gray-500" />
            </div>
            <div
              className="mb-4  overflow-y-auto overflow-x-hidden p-4 flex flex-wrap gap-4"
              style={{
                scrollbarWidth: "none",
                height: "60vh",
              }}
            >

              {
                courses.length === 0 && <h1 className='text-2xl  font-bold text-gray-800 p-y-4 text-center'>
                  No courses found
                </h1>
              }

              {courses.map((course) => (
                <CourseCard key={course._id} course={course} />
              ))}
            </div>
          </>
        )}
      </div>

  )
}
