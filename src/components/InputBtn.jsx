import React from 'react'
import { RiAddCircleLine } from "react-icons/ri";


const InputBtn = () => {
  return (
    <div className='flex justify-center items-center gap-2 m-[-25px] mb-10'>
        <input type="text" placeholder='Add a new task' className='bg-[#262626] text-gray-300 border p-2 rounded-md' />
        <button className='flex items-center gap-1 bg-[#1E6F9F] text-lg text-white p-2 rounded-md'>Add <RiAddCircleLine/></button>
    </div>
  )
}

export default InputBtn