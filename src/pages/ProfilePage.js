import React from "react";

import ProfileCard from "../components/ProfileCard";
import NavCard from "../components/NavCard";

import { useState, useEffect } from 'react';

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function ProfilePage() {

  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  const fetchUserDetails = async () => {

    if (!localStorage.getItem('token')) {
      toast.error('Please login to view profile');
      navigate('/login');
      return;
    }

    try {

      const res = await fetch('http://localhost:4000/api/userdetails', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      const data = await res.json();
      setUser(data.user);
      console.log(data.user);

    } catch (error) {
      console.log(error);

    }
  }

  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  }

  useEffect(() => {
    fetchUserDetails();
  }, [])

  return (
    // <div>ProfilePage</div>
    <>

        <div className="gap-4 w-full col-span-3 h-full shadow-lg mr-5">
          {/* // main content */}

          {/* // user profile */}
          <div className="items-center justify-center flex flex-col py-4">
            <img
              src={user ? '/images/Avatar1.jpg' : '/images/sad-face.png'}
              alt="profile"
              className="rounded-full hover:border-2 border-blue-500"
              width="150"
              height="150"
            />

            <h1 className="text-2xl py-2 font-bold">
              {user?.name ? user?.name : "You Haven't Logged In"}
            </h1>
          </div>
          {/* // email address */}
          <div className="flex flex-col justify-center gap-2 items-start space-1 ml-10">
            <label className=" justify-start align-baseline font-semibold pt-2">
              Email
            </label>

            <input
              type="email"
              className={`border border-gray-300 rounded-lg p-2`}
              placeholder="Email Address"
              defaultValue={user?.email}
              style={{ width: "90%" }}
              disabled
            />
          </div>

          <div className="flex flex-col mt-2  justify-start gap-2 items-start space-1 ml-10">
            
            <label className=" justify-start align-baseline font-semibold pt-2">
              Role
            </label>
            <input
              type="text"
              className={`border border-gray-300 rounded-lg p-2`}
              placeholder="Role"
              defaultValue={user?.role}
              style={{ width: "90%" }}
              disabled
            />
          </div>
          {/* // logout button */}
          <div className="flex justify-center mt-4">
            <button onClick={logout} className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Logout
            </button>
          </div>


        </div>
    </>
  );
}
