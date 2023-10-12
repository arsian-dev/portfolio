'use client'

import React from 'react'
import SideBar from './sideBar'
import SideNav from './sideNav'
import { GlobalContext } from '@/context/AppContext'
import BurgerMenu from './burgerMenu'

const SideBarContainer = () => {
  const { sideActive, setIsActive } = GlobalContext()
  console.log(sideActive, 'desde el container')

  return (
    <div className='w-full h-screen flex flex-row-reverse md:flex-row'>
      <SideNav />
      <SideBar />
    </div>
  )
}

export default SideBarContainer
