
import React from 'react';

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
        <div className="container mx-auto">
            {questions.map((q, index) => (
                <div key={index} className="my-4">
                    <h3 className="text-lg font-bold mb-2">{q.question}</h3>
                    <ul className="list-disc pl-6">
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
    );
}
