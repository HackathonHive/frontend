import React from 'react'

import {
  Link
} from 'react-router-dom';

import NavCard from '../components/NavCard';
import ProfileCard from '../components/ProfileCard';

export default function Signup() {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [role, setRole] = React.useState('')

  const handleSubmit = async() => {
    console.log(name, email, password,role)

    if(!name || !email || !password || !role){
      console.log('Please fill all the fields')
      return
    }
    console.log(role);

    try {
      const response = await fetch('http://localhost:4000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          password,
          role
        })
      })
      const data = await response.json()
      // console.log(data)
      
    } catch (error) {
      console.log(error)
      
    }

  }
  return (
    <div className={`grid-cols-1 grid md:grid-cols-4 gap-8 m-0 h-full p-4  fixed w-full `} style={{ height: '100%' }}>
    <div className='hidden md:block gap-4 col-span-1'>
      {/* profile and nav */}
      <ProfileCard />
      <NavCard />
    </div>



        <div className=' w-full gap-4 col-span-3 h-full shadow-lg mr-5'>
          <div className=' overflow-y-auto overflow-x-hidden'
            style={{
              scrollbarWidth: 'none', height: '100vh', paddingBottom: '250px',
            }}>

            <div className="flex justify-center">
              <img src='./images/signupImage.jpg' alt='confession' className='rounded-lg mx-auto'
                width='40%' height='40%'
              />
            </div>
            <div className="flex flex-col gap-4 p-4">
              {/* // signin form */}
              <input type="text" placeholder="Name" className={'w-full  p-4 border-2 border-gray-200 rounded-lg'}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input type="text" placeholder="Email" className={'w-full  p-4 border-2 border-gray-300 rounded-lg'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}

              />
              <input type="password" placeholder="Password" className={'w-full p-4 border-2 border-gray-300 rounded-lg'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}

              />
              <select id="role" className="border border-gray-300 rounded-lg p-4 w-full"
                defaultValue=""  onChange={(e) => setRole(e.target.value)}
              >
                <option >
                  Select your category
                </option>
                <option value="K-12">
                  K-12
                </option>
                <option value="Computer_Science">
                  Computer Science
                </option>
                <option value="Photo_Editing">
                  Photo Editing
                </option>
              </select>

              <p className="text-center">
                Already have an account?
                <Link to='/login' className="text-blue-500">
                  Sign In
                </Link>
              </p>


              <button className="p-2 bg-blue-500 text-white rounded-lg" onClick={handleSubmit}>
                Sign Up
              </button>

              <h3 className="text-center">Or</h3>
              <div className="flex justify-center gap-4">
                <img src='/images/googleIcon.png' alt='google' className='w-10 h-10 rounded-full cursor-pointer' />
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
