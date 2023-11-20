import React from 'react'
import Logo from '../img/rocket.png'

const Header = () => {
  return (
    <div className='bg-black h-[200px] flex justify-center'>
        <div className='flex items-center justify-center gap-3'>
          <img src={Logo} width="26px" alt="" />
          <p className='text-[#4EA8DE] font-black text-5xl'>to<span className='text-[#5E60CE]'>do</span></p>
        </div>
    </div>
  )
}

export default Header