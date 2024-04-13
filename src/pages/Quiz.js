
import React from 'react';
import ProfileCard from "../components/ProfileCard";
import NavCard from "../components/NavCard";

export default function Quiz() {
    const questions = [
        {
            question: 'What is the capital of France?',
            options: ['Paris', 'London', 'Berlin', 'Rome'],
        },
        {
            question: 'Which planet is known as the Red Planet?',
            options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
        },
        // Add more questions here
    ];

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
    <div className="mx-auto w-full px-24 flex-col justify-center align-middle gap-4 col-span-3 h-full shadow-lg mr-5 contents sm:block">
      
        <div className="container mx-auto shadow-md" >
            {questions.map((q, index) => (
                <div key={index} className="my-6 shadow-md">
                    <h3 className="text-lg font-bold mb-2">{`Q${index+1}.  ${q.question}`}</h3>
                    <ul className="list-none pl-6">
                        {q.options.map((option, optionIndex) => (
                            <li key={optionIndex} className="mb-1">
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        name={`question-${index}`}
                                        value={option}
                                        className="form-radio mr-2"
                                    />
                                    {option}
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
        </div>
        </div>
        </>
    );
}
