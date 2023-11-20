import React from 'react'
import { BsTrash3 } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai"

const Tasks = () => {
    return (
        <div className='flex justify-center'>
            <div className='flex justify-start items-center bg-[#333333] w-1/4 p-3 rounded-2xl mt-4'>
                <button><AiOutlineCheckCircle /></button>
                <p className='pl-2 flex'>React E-commerce Projesi Bitirilecek. </p>
            </div>
            <button className='pl-4 mt-4'><BsTrash3 /></button>
        </div> 
    )
}

export default Tasks