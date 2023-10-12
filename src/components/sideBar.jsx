'use client'

import GithubIcon from '@/svg-icons/github-icon'
import LinkedinIcon from '@/svg-icons/linkedin-icon'
import TelegramIcon from '@/svg-icons/telegram-icon'
import WhatsappIcon from '@/svg-icons/whatsapp-icon'
import Image from 'next/image'
import myPicture from '../../public/Yo.png'
import { useState } from 'react'

const SideBar = () => {
  return (
    <div className='h-screen w-full grid grid-cols-5 grid-rows-10 bg-grey-1'>
      <div className='col-start-1 col-end-6 row-start-2 row-end-5 h-full w-full flex justify-center items-center'>
        <Image
          src={myPicture}
          alt='Sebastian Aguiar'
          width={128}
          height={128}
          className='h-32 w-32 rounded-full border-2 border-white-1 md:h-60 md:w-60'
        />
      </div>
      <div className='col-start-1 col-end-6 row-start-5 row-end-6 text-center decoration-white-1 mb-3 mt-10'>
        <h1 className='font-bold text-4xl text-white-1 md:text-5xl lg:text-4xl'>
          Sebastian Aguiar
        </h1>
        <h2 className='font-bold text-lg text-grey-3 md:text-2xl lg:text-xl'>
          Backend Developer
        </h2>
      </div>
      <div className='col-start-2 col-end-5 row-start-7 row-end-8 flex justify-around items-center'>
        <GithubIcon />
        <LinkedinIcon />
        <TelegramIcon />
        <WhatsappIcon />
      </div>
      <div className='col-start-2 col-end-5 row-start-9 flex justify-center items-center'>
        <button
          type='button'
          onClick={() => {
            console.log('hola')
          }}
          className='h-9 w-48 rounded-full drop-shadow-lg bg-grey-1 border-2 border-white-1 text-base text-white-1 shadow ease-out duration-300 hover:ease-in-out hover:duration-300 hover:shadow-shadow-1 hover:shadow-green-1 md:w-52 active:scale-95'
        >
          Descargar CV
        </button>
      </div>
    </div>
  )
}

export default SideBar
