import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
export default function ProfileCard() {

    const [user, setUser] = useState([]);

    const fetchUserDetails = async () => {
        try {

            const res = await fetch('https://backend-1ndv.onrender.com/api/userdetails', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            const data = await res.json();
            setUser(data.user);
            console.log(data.user);

        } catch (error) {
            console.log(error);

        }
    }

    const logout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    }

    useEffect(() => {
        fetchUserDetails();
    }, [])

    return (

        <div className='p-2'>
            <div className={`shadow-lg p-4  rounded-lg`}>
                <div className='flex justify-center'>
                    <Link to={user ? '/profile' : '/login'}>
                        <img
                            src={user ? '/images/Avatar1.jpg' : '/images/sad-face.png'}
                            alt='profile' className='rounded-full cursor-pointer border-4 border-blue-500 shadow-lg hover:border-2' width='100' height='100' />
                    </Link>
                </div>
                <div className='text-center'>
                    <h1 className='text-xl font-bold'>
                        {user?.name ? user?.name : 'You Haven\'t Logged In'}

                    </h1>

                    <div className='flex flex-col gap-2 justify-center mt-4'>
                        {
                            user?.name &&

                            <button onClick={logout} className='bg-blue-500 text-white p-2 rounded-lg'>
                                Logout
                            </button>
                        }
                        {!user && <Link to='/login'  className='bg-blue-500 text-white p-2 rounded-lg'>
                            Login
                        </Link>}

                    </div>
                </div>
            </div>
            <div>

            </div>

        </div>
    )

}
