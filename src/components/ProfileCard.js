import React from 'react'
import { Link } from 'react-router-dom';
export default function ProfileCard() {
    return (

        <div className='p-2'>
            <div className={`shadow-lg p-4  rounded-lg`}>
                <div className='flex justify-center'>
                  <Link to='/login'>
                    <img src="/images/Avatar1.jpg" alt='profile' className='rounded-full cursor-pointer border-4 border-blue-500 shadow-lg hover:border-2' width='100' height='100' />
                  </Link>
                </div>
                <div className='text-center'>
                    <h1 className='text-xl font-bold'>You Haven't Logged In</h1>

                    <div className='flex flex-col gap-2 justify-center mt-4'>

                        <Link to='/login' className='bg-blue-500 text-white p-2 rounded-lg'>Login</Link>

                    </div>
                </div>
            </div>
            <div>
         
    </div>
            
        </div>
    )

}
