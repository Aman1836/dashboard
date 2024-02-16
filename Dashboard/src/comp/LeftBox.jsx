import React from 'react'
import { MdSearch } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { ImBooks } from "react-icons/im";
import { MdEmojiEvents } from "react-icons/md";
import { MdEvent } from "react-icons/md";
function LeftBox() {
  return (
    <>
    <div className='w-40 h-screen bg-zinc-900'>
       <div className='w-full p-10 ' >
        <h3 className='font-serif text-2xl text-center text-cyan-50 font-extralight'>EasyPie</h3>
       </div>
       <div className='w-full mt-12 '>
            <div className='flex  justify-center  w-4/5  h-8  m-auto items-center mb-6 p-1  border-purple-500 border-2 '>
                <MdSearch className=' text-xl mr-1'/>
                <input className=' w-4/6 border-none  '></input>
            </div>
            <ul className='p-1  font-mono flex flex-col gap-2  '>
                <li className=''>
                    
                <a href='#' className=' flex pl-4  items-center text-slate-100 hover: border-l-indigo-500 hover:border-l-2 focus:border-l-2'>
                <IoHome  className=' mr-2 text-xl'/>
                    <h2 >HOME</h2>   
                    </a>
                </li>
                <li>
                <a href='#' className=' flex pl-4 items-center text-slate-100 hover: border-l-indigo-500 hover:border-l-2 focus:border-l-2'>
                <ImBooks className=' mr-2 text-xl' />
                        <h3>COURSES</h3>
                    </a>
                </li>
                <li>
                <a href='#' className=' flex pl-4 items-center text-slate-100 hover: border-l-indigo-500 hover:border-l-2 focus:border-l-2'>    
                <MdEmojiEvents className='mr-2 text-xl'/>
                        CONTESTS
                    </a>
                </li>
                <li>
                <a href='#' className=' flex items-center pl-4 text-slate-100 hover: border-l-indigo-500 hover:border-l-2 focus:border-l-2'>
               < MdEvent className='mr-2 text-xl'/>
                        EVENTS
                    </a>
                </li>
            </ul>
       </div>
    </div>
    </>
  )
}

export default LeftBox