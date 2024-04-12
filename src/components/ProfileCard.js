import React from 'react'

export default function ProfileCard() {
    return (
        <div className={`shadow-lg p-4  rounded-lg`}>
            <div className='flex justify-center'>
                <img src="./images/Avatar1.jpg" alt='profile' className='rounded-full cursor-pointer border-4 border-blue-500 shadow-lg hover:border-2' width='100' height='100'/>
            </div>
            <div className='text-center'>
                <h1 className='text-xl font-bold'>You Haven't Logged In</h1>
                
                <div className='flex flex-col gap-2 justify-center mt-4'>

                    <button className='bg-blue-500 text-white px-4 py-2 rounded-md'>Login</button>

                </div>
            </div>
        </div>
    )

}
