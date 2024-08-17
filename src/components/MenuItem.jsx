import Link from 'next/link'
import React from 'react'


function MenuItem({title,adress,Icon}) {
  return (
    <Link href={adress} className='hover:text-blue-500'>
        <Icon className='text-2xl sm:hidden'/>
        <h3 className='uppercase hidden sm:inline text-sm'>{title}</h3>
    </Link>
  )
}

export default MenuItem
