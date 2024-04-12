import React from 'react'
import ProfileCard from '../components/ProfileCard'
import NavCard from '../components/NavCard';

export default function HomePage() {
  return (
    
    <div className={`grid-cols-1 grid md:grid-cols-4 gap-8 m-0 h-full p-4  fixed w-full `} style={{ height: '100%' }}>
      <div className='hidden md:block gap-4 col-span-1'>
        {/* profile and nav */}
        <ProfileCard />
        <NavCard />
      </div>

      
      <div className='gap-4 w-full col-span-2 h-full shadow-lg mr-5'>
        
        main content
      </div>

      <div className='mr-2 hidden md:block'>

        search and trending 
      </div>
    </div>
  )
}
