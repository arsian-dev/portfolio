import React from 'react'

import Link from 'next/link'
import {
  PiEnvelopeSimpleLight,
  PiFileTextLight,
  PiUserLight,
  PiHouseSimpleLight
} from 'react-icons/pi'

const SideNav = () => {
  return (
    <div className='h-screen w-1/6 flex flex-col items-center bg-black-1 border-r border-white-1 md:w-1/12 lg:w-1/6'>
      <ul className='h-56 w-full flex flex-col justify-center items-center divide-y divide-grey-1 md:h-64'>
        <li className='h-16 w-full flex justify-center items-center hover:ease-in-out hover:duration-400 hover:bg-grey-1'>
          <Link
            className='h-full w-full flex items-center justify-center'
            href='/'
          >
            <PiHouseSimpleLight className='h-10 w-10 text-white-1 md:h-11 md:w-11' />
          </Link>
        </li>
        <li className='h-16 w-full flex justify-center items-center hover:ease-in-out hover:duration-400 hover:bg-grey-1 hover:text-green-1'>
          <Link
            className='h-full w-full flex items-center justify-center'
            href='/about'
          >
            <PiUserLight className='h-10 w-10 text-white-1 md:h-11 md:w-11 hover:drop-shadow-lg hover:shadow-white-1' />
          </Link>
        </li>
        <li className='h-16 w-full flex justify-center items-center hover:ease-in-out hover:duration-400 hover:bg-grey-1'>
          <Link
            className='h-full w-full flex items-center justify-center'
            href='/resume'
          >
            <PiFileTextLight className='h-10 w-10 text-white-1 md:h-11 md:w-11' />
          </Link>
        </li>
        <li className='h-16 w-full flex justify-center items-center hover:ease-in-out hover:duration-400 hover:bg-grey-1'>
          <Link
            className='h-full w-full flex items-center justify-center'
            href='/contact'
          >
            <PiEnvelopeSimpleLight className='h-10 w-10 text-white-1 md:h-11 md:w-11' />
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default SideNav
