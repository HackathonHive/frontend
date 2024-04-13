import React from 'react'
import ProfileCard from '../components/ProfileCard'
import {
  Link
} from 'react-router-dom';

import NavCard from '../components/NavCard';
import { toast } from 'react-toastify';
import Loadar from '../components/Loadar';


export default function LoginPage() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [loading, setLoading] = React.useState(false)


  const handleLogin = async () => {
    if (!email || !password) {
      toast.error('Please fill all the fields')
      return
    }

    try {

      const response = await fetch('http://localhost:4000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      })
      const data = await response.json()
      // console.log(data)
      localStorage.setItem('token', data.token)
      alert('Login Successful')

    } catch (error) {
      console.log(error)

    }
    finally{
      setLoading(false)
    }

  }
  return (

    <div className={`grid-cols-1 grid md:grid-cols-4 gap-8 m-0 h-full p-4  fixed w-full `} style={{ height: '100%' }}>
      <div className='hidden md:block gap-4 col-span-1'>
        {/* profile and nav */}
        <ProfileCard />
        <NavCard />

      </div>


      <div className='gap-4 w-full col-span-3 h-full shadow-lg mr-5'>

        <div className=' w-full gap-4 col-span-2 h-full shadow-lg mr-5'>
          <div className=' overflow-y-auto overflow-x-hidden'
            style={{
              scrollbarWidth: 'none', height: '100vh', paddingBottom: '250px',
            }}>

            <div className="flex justify-center">
              <img src='./images/LoginImage.jpg' alt='confession' className='rounded-lg mx-auto'
                width='50%' height='40%'
              />
            </div>
            <div className="flex flex-col gap-4 p-4">
              {/* // signin form */}

              <input type="text" placeholder="Email" className={`w-full  p-4 border-2 border-gray-300 rounded-lg`}

              onChange={(e) => setEmail(e.target.value)}
              defaultValue={email}
              />
              <input type="password" placeholder="Password" className={`w-full p-4 border-2 border-gray-300 rounded-lg`}

              onChange={(e) => setPassword(e.target.value)}
              defaultValue={password}
              />

              <p className="text-center">Don't have an account?
                <Link to='/signup' className="text-blue-500"> Sign Up</Link>
              </p>


              {
                loading ? <Loadar/>:
                <button className="p-2 bg-blue-500 text-white rounded-lg" onClick={handleLogin} >
                Sign In
              </button>}

              <h3 className="text-center">Or</h3>
              <div className="flex justify-center gap-4">
                <img src='/images/googleIcon.png' alt='google' className='w-10 h-10 rounded-full cursor-pointer' />
              </div>
            </div>




          </div>


        </div>
      </div>

      {/* <div className='mr-2 hidden md:block'>

        search and trending
      </div> */}
    </div>

  )
}