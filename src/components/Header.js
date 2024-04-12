import React from 'react'

export default function 
() {
  return (
    <div>
        <div className={`flex justify-between items-center p-3 shadow-sm text-2xl font-bold mb-2`}>
            <h1>AnonVerse</h1>
            <div className='flex flex-row'>

                {/* // add a toggle button to switch between light and dark mode */}
                <button  className={`p-2 rounded-full`}>
                    {/* {mode === 'light' ? <MoonIcon className='h-8 w-8' /> : <SunIcon className='h-8 w-8' />} */}

                </button>

                <button className='hidden md:block p-2 rounded-full bg-gray-200'
                    // onClick={() => navigate('/profile')}
                >
                    {/* <UserCircleIcon className='h-8 w-8' /> */}
                </button>
            </div>
        </div>


    </div>
  )
}
