import React from 'react'
import {AiFillHome} from 'react-icons/ai';
import { AiFillInfoCircle } from 'react-icons/ai';
import MenuItem from './MenuItem';
import Link from 'next/link';
const Header = () => {
  return (
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
      <div className='flex gap-5'>
        <MenuItem title="home" adress='/' Icon={AiFillHome}/>
        <MenuItem title="about" adress='/about' Icon={AiFillInfoCircle}/>
     </div>
     <Link  href={'/'} className='flex gap-3 items-center'>
        <span className='text-xl bg-blue-300 font-bold py-2 px-1 rounded-lg'>YrBlog</span>
        <span className='hidden sm:inline'>h</span>
      </Link>
    </div>
  )
}

export default Header
