import React from 'react'
import { HiBars3, HiChevronLeft } from 'react-icons/hi2'
import { GlobalContext } from '@/context/AppContext'

const BurgerMenu = () => {
  const { sideActive, setIsActive } = GlobalContext()

  const handleClick = () => {
    setIsActive(!sideActive)
    console.log(sideActive, 'desde el burger')
  }

  return (
    <button
      onClick={() => handleClick()}
      className='w-8 h-8 rounded-full absolute flex justify-center items-center top-4 right-4 lg:hidden bg-grey-1/10'
    >
      <HiBars3 className='w-5 h-5 text-white-1/50' />
    </button>
  )
}

export default BurgerMenu
