import { MicrophoneIcon, PaperAirplaneIcon } from '@heroicons/react/24/solid';
import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const AIPage = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className=' w-full gap-4 col-span-3 h-screen  shadow-lg mr-5'>
      <div className='text-center'>
        <h1 className='text-2xl font-bold'>AI Chatbot</h1>
      </div>
      <div className='text-center p-2 flex flex-row  bg-white rounded-md w-full '>
        <input
          type="text"
          placeholder="Type something"
          className="border w-full border-gray-300 rounded-md p-2"
          value={transcript}
          onChange={(e) => resetTranscript(e.target.value)}
        />
        <MicrophoneIcon className="h-8 w-8 text-blue-500 cursor-pointer" onClick={SpeechRecognition.startListening} />
        <PaperAirplaneIcon className="h-8 w-8 text-blue-500 cursor-pointer" />
      </div>
      <div
        className='overflow-y-auto overflow-x-hidden'
        style={{
          scrollbarWidth: 'none',
          height: '100vh',
          paddingBottom: '250px',
        }}
      >
        {/* Chatbot messages */}
        <div className='flex flex-col gap-4 p-4'>
          <div className='flex flex-row gap-4'>
            <div className='bg-blue-500 p-2 rounded-lg text-white'>
              <p>Hello, How can I help you?</p>
            </div>
          </div>
          <div className='flex flex-row gap-4 justify-end '>
            <div className='bg-blue-500 p-2 rounded-lg text-white max-w-80'>
              <p>
                I want to know about the weather in New York and the time in Tokyo. Can you help me with that?

              </p>
            </div>
          </div><div className='flex flex-row gap-4'>
            <div className='bg-blue-500 p-2 rounded-lg text-white'>
              <p>Hello, How can I help you?</p>
            </div>
          </div>
          <div className='flex flex-row gap-4 justify-end '>
            <div className='bg-blue-500 p-2 rounded-lg text-white max-w-80'>
              <p>
                I want to know about the weather in New York and the time in Tokyo. Can you help me with that?

              </p>
            </div>
          </div><div className='flex flex-row gap-4'>
            <div className='bg-blue-500 p-2 rounded-lg text-white'>
              <p>Hello, How can I help you?</p>
            </div>
          </div>
          <div className='flex flex-row gap-4 justify-end '>
            <div className='bg-blue-500 p-2 rounded-lg text-white max-w-80'>
              <p>
                I want to know about the weather in New York and the time in Tokyo. Can you help me with that?

              </p>
            </div>
          </div><div className='flex flex-row gap-4'>
            <div className='bg-blue-500 p-2 rounded-lg text-white'>
              <p>Hello, How can I help you?</p>
            </div>
          </div>
          <div className='flex flex-row gap-4 justify-end '>
            <div className='bg-blue-500 p-2 rounded-lg text-white max-w-80'>
              <p>
                I want to know about the weather in New York and the time in Tokyo. Can you help me with that?

              </p>
            </div>
          </div><div className='flex flex-row gap-4'>
            <div className='bg-blue-500 p-2 rounded-lg text-white'>
              <p>Hello, How can I help you?</p>
            </div>
          </div>
          <div className='flex flex-row gap-4 justify-end '>
            <div className='bg-blue-500 p-2 rounded-lg text-white max-w-80'>
              <p>
                I want to know about the weather in New York and the time in Tokyo. Can you help me with that?

              </p>
            </div>
          </div><div className='flex flex-row gap-4'>
            <div className='bg-blue-500 p-2 rounded-lg text-white'>
              <p>Hello, How can I help you?</p>
            </div>
          </div>
          <div className='flex flex-row gap-4 justify-end '>
            <div className='bg-blue-500 p-2 rounded-lg text-white max-w-80'>
              <p>
                I want to know about the weather in New York and the time in Tokyo. Can you help me with that?

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};
export default AIPage;