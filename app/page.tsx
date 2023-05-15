import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div >
      <div className='hidden lg:flex w-1/2 h-[100vh] quoteBg absolute right-0 blur-[2.5px] -z-10'>
      </div>
      < Navbar />
      <Hero />
    </div >
  )
}

export default page