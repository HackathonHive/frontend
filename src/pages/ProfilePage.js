import React from "react";

export default function ProfilePage() {
  return (
    // <div>ProfilePage</div>
    <>
      <div
        className={`grid-cols-1 grid md:grid-cols-4 gap-8 m-0 h-full p-4  fixed w-full `}
        style={{ height: "100%" }}
      >
        <div className="hidden md:block gap-4 col-span-1">profile and nav</div>

        <div className="gap-4 w-full col-span-2 h-full shadow-lg mr-5">
        <div className="gap-4 w-full col-span-2 h-full shadow-lg mr-5">
        {/* // main content */}

        {/* // user profile */}
        <div className="items-center justify-center flex flex-col py-4">
          <img
            src="https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure-64x36.webp"
            alt="profile"
            className="rounded-full hover:border-2 border-blue-500"
            width="150"
            height="150"
          />

          <h1 className="text-2xl py-2 font-bold">Ansh Agrawal</h1>
        </div>
        {/* // email address */}
        <div className="flex justify-center gap-4 items-center space-y-4">
          <label className={`font-semibold pt-2`}>Email</label>

          <input
            type="email"
            className={`border border-gray-300 rounded-lg p-2 w-3/4`}
            placeholder="Email Address"
            defaultValue={"abcdefgtheiif@hmail.com"}
            disabled
          />
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
