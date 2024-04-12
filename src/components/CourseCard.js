import React from 'react'

export default function CourseCard() {
    return (
        // make scrollable


            <div className="max-w-sm  overflow-hidden shadow-lg rounded-lg">
                <img className="w-full" src="https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/videoseries/ultimate-js-tutorial-hindi-1/JS-Thumb.jpg" alt="Course" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Course Title</div>
                    <p className="text-gray-700 text-base">Course Description</p>
                </div>
                <div className="px-6 py-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Enroll Now
                    </button>
                </div>
            </div>

    );
}
