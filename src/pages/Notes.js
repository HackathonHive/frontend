import React, { useEffect } from "react";
import { Link } from 'react-router-dom';

import ProfileCard from "../components/ProfileCard";
import NavCard from "../components/NavCard";
import { useState } from "react";

export default function Notes() {

  const handleSubmit = async () => {

    if (!note || !title) {
      alert('Please fill in all fields');
      return;
    }

    try {
      const res = await fetch('http://localhost:4000/api/addnote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ note, title }),
      });
      const data = await res.json();
      console.log(data);
      if (data.error) {
        console.log(data.error);
      } else {
        // console.log(data);
      }

    } catch (error) {
      console.log(error);

    }

  }
  const fetchNotes = async () => {
    try {
      const res = await fetch('http://localhost:4000/api/notes', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      const data = await res.json();
      console.log(data);
      setNotes(data.notes);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchNotes();
  }, []);




  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState("");
  const [title, setTitle] = useState("");
  return (
    <>
      <div
        className={`grid-cols-1 grid md:grid-cols-4 gap-8 m-0 h-full p-4  fixed w-full `}
        style={{ height: "100%" }}
      >
        <div className="hidden md:block gap-4 col-span-1">
          <ProfileCard />
          <NavCard />
        </div>
        <div className="mx-auto w-full px-24 flex-col justify-center align-middle gap-4 col-span-3 h-full shadow-lg mr-5">
          <div className="w-full mb-8">
            <h3>Type Your Notes : </h3>

            <input type="text" className="w-full my-2 p-2 mx-auto border-1 shadow-lg"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              className="w-full mx-auto border-1 shadow-lg my-2"
              value={note}
              rows={5}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Type your notes here"
            ></textarea>
            <div className="flexgap-2 justify-center mt-4">
              <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Save
              </button>
            </div>
          </div>

          <div className="w-full">
            <h3>Your Notes : </h3>
            <div className="flex flex-col gap-4 p-4">
              {notes.map((note) => (
                <div key={note._id} 
                className="border-2 p-4 rounded-lg shadow-md" 
                >
                  <h3 
                  className="text-2xl font-bold"
                  >{note.title}</h3>
                  <p>{note.note}</p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </>
  );
}
