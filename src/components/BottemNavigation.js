import React from 'react'
import { PlusCircleIcon, HomeIcon, UserCircleIcon, ViewColumnsIcon, PencilSquareIcon } from '@heroicons/react/24/solid'
import { useNavigate } from 'react-router-dom'

export default function BottemNavigation() {
    const navigate = useNavigate();
  return (
    <div>
         <div className={`md:hidden sm:block fixed bottom-0 left-0 z-50 w-full h-16 border-t bg-white border-gray-200 `}>
            <div className={`grid h-full max-w-lg grid-cols-4 mx-auto font-medium  `}>
                <button type="button" className={`inline-flex flex-col items-center justify-center px-5  group`}
                onClick={()=>{
                    navigate('/');
                }}>
                    

                    <HomeIcon className='h-8 w-8' />

                    <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Home</span>
                </button>

                
                
                <button type="button" className={`inline-flex flex-col items-center justify-center px-5    group`}
                onClick={()=>{
                    navigate('/courses');
                }}>
                
                    
                    <ViewColumnsIcon className='h-8 w-8' />

                    <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                        Courses
                    </span>
                </button>

                
                <button type="button" className={`inline-flex flex-col items-center justify-center px-5    group`} 
                onClick={()=>{
                    navigate('/notes');
                }}
                >
                    <PencilSquareIcon className='h-8 w-8' />
                    <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                        Notes
                    </span>
                </button>

                
                <button type="button" className={`inline-flex flex-col items-center justify-center px-5    group`}
                onClick={()=>{
                    navigate('/profile');
                }}
                >
                    

                    <UserCircleIcon className='h-8 w-8' />

                    <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Profile</span>
                </button>
            </div>
        </div>

    </div>
  )
}
