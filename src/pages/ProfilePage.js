import React from "react";

import ProfileCard from "../components/ProfileCard";
import NavCard from "../components/NavCard";

export default function ProfilePage() {
  return (
    // <div>ProfilePage</div>
    <>
      <div
        className={`grid-cols-1 grid md:grid-cols-4 gap-8 m-0 h-full p-4  fixed w-full `}
        style={{ height: "100%" }}
      >
        <div className="hidden md:block gap-4 col-span-1">
        <ProfileCard />
        <NavCard />
        </div>

        <div className="gap-4 w-full col-span-2 h-full shadow-lg mr-5">
          <div className="gap-4 w-full col-span-2 h-full shadow-lg mr-5">
            {/* // main content */}

            {/* // user profile */}
            <div className="items-center justify-center flex flex-col py-4">
              <img
                src="/images/Avatar1.jpg"
                alt="profile"
                className="rounded-full hover:border-2 border-blue-500"
                width="150"
                height="150"
              />

              <h1 className="text-2xl py-2 font-bold">Ansh Agrawal</h1>
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
                defaultValue={"abcdefgtheiif@hmail.com"}
                style={{ width: "90%" }}
                disabled
              />
            </div>

            <div className="flex flex-col mt-2  justify-start gap-2 items-start space-1 ml-10">
              <label className=" justify-start align-baseline font-semibold pt-2">
                Select your category:
              </label>

              <div className="flex w-full gap-2" style={{ width: "90%" }}>
                <select id="fruits" className="border border-gray-300 rounded-lg p-2 w-4/5"
                  style={{ width: "80%" }} defaultValue=""
                >
                  <option >
                    Select your category
                  </option>
                  <option value="12 ">
                    K-12
                  </option>
                  <option value="Computer Science">
                    Computer Science
                  </option>
                  <option value="Photo Editing">
                    Photo Editing
                  </option>
                </select>

                <button className=" bg-gray-100 border border-gray-300 text-black px-4 py-2 rounded-md mt-2 h-12" style={{ width: "20%", height:"100%" }}>
                  Save
                </button>

              </div>
            </div>
            {/* // logout button */}
            <div className="flex justify-center mt-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Logout
              </button>
            </div>


          </div>
        </div>

        <div className="mr-2 hidden md:block">search and trending</div>
      </div>
    </>
  );
}
