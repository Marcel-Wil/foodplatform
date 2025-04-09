import React from 'react'
import crowdcooks from '../../../storage/app/public/crowdcooks.svg'

const navbar = () => {
  return (
    <nav className='fixed bg-[#FFF9EA] w-full flex items-center px-6 py-3 gap-16 justify-between'>
      <div className='flex gap-16'>
        <a href="/">
          <img src={crowdcooks} alt="" />
        </a>
        <div className='flex gap-8'>
          <a href="/menu" className='text-black font-bold text-xl hover:underline'>Menu</a>
          <a href="/plan" className='text-black font-bold text-xl hover:underline'>Plans</a>
          <a href="/faq" className='text-black font-bold text-xl hover:underline'>Faq</a>
          <a href="/contact" className='text-black font-bold text-xl hover:underline'>Contact us</a>
        </div>
      </div>
      
      <div className='flex gap-8'>
        <a href="/login" className='text-black font-bold text-xl'>Login</a>
        <button className='text-black font-bold text-xl'>EN</button>
      </div>
    </nav>
  )
}

export default navbar