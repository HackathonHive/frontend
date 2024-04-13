import React, { useEffect, useState } from "react";
import ProfileCard from "../components/ProfileCard";
import NavCard from "../components/NavCard";
import CourseCard from "../components/CourseCard";
import { client, builder } from "../api/SanityClient";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loadar from "../components/Loadar";
export default function HomePage() {
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

    let category = localStorage.getItem('role');
    const query = `*[_type == "courses" && category =="${category}"]`;
    const courses = await client.fetch(query);
    setCourses(courses);
    setLoading(false);
    // console.log(courses);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div
      className={`grid-cols-1 grid md:grid-cols-4 gap-8 m-0 h-full p-4  fixed w-full `}
      style={{ height: "100%" }}
    >
      <div className="hidden md:block gap-4 col-span-1">
        {/* profile and nav */}
        <ProfileCard />
        <NavCard />
      </div>

      <div className="gap-4 w-full col-span-3  mb-5 my-4 shadow-lg mr-5">
        {loading ? (
          <Loadar />
        ) : (
          <>
            <div className="flex justify-center w-4/5 gap-8 my-8 ml-4">
              <input
                type="text"
                className="flex-grow rounded-full h-9py-2 px-4 border-2 border-black shadow-md"
              />
              <button
                className="p-2 bg-blue-500 text-white rounded-lg"
              >
                Search
              </button>
            </div>
            <div
              className="mb-4  overflow-y-auto overflow-x-hidden p-4 flex flex-wrap gap-4"
              style={{
                scrollbarWidth: "none",
                height: "80vh",
              }}
            >
              {courses.map((course) => (
                <CourseCard key={course._id} course={course} />
              ))}
            </div>
          </>
        )}
      </div>

      {/* <div className='mr-2 hidden md:block'>

        search and trending 
      </div> */}
    </div>
  )
}
