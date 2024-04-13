import React from 'react'
import { PlusCircleIcon, HomeIcon, ViewColumnsIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

// import { useSelector } from 'react-redux'
export default function NavCard() {
  return (
    <div className='m-2'>
         <div className={`shadow-lg p-4  rounded-lg mt-4`}>
          <ul className='space-y-3'>
            <li className='flex items-center space-x-2 text-lg hover:text-blue-500'>
              <HomeIcon className='h-8 w-8' />
              <Link to='/'>Home</Link>
            </li>
            <li className='flex items-center space-x-2  text-lg hover:text-blue-500'>
              <ViewColumnsIcon className='h-8 w-8' />
              <Link to='/courses'>
                Courses
              </Link>
            </li>
            <li className='flex items-center space-x-2  text-lg hover:text-blue-500'>
              <PlusCircleIcon className='h-8 w-8' />
              <Link to='/notes'>
                Notes
              </Link>
            </li>
          </ul>

        </div>
    </div>
  )
}
