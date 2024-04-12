import React from "react";
import { Link } from 'react-router-dom';

export default function Notes() {
  return (
    <div className="mx-auto w-4/5 flex-col justify-center align-middle">
      <div className="w-full mb-8">
        <h3>Type Your Notes : </h3>
        <textarea
          className="w-full mx-auto border-4 shadow-lg"
          rows={5}
        ></textarea>
        <div className="flexgap-2 justify-center mt-4">
          <Link to="/login" className="bg-blue-500 text-white p-2 rounded-lg">
            Add note
          </Link>
        </div>
      </div>
      <div className="w-full rounded-sm shadow-lg p-4">
        loreLorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </div>
      <div className="w-full rounded-sm shadow-lg p-4">
        loreLorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </div>
      <div className="w-full rounded-sm shadow-lg p-4">
        loreLorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </div>
    </div>
  );
}
