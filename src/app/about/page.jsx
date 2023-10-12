import React from 'react'
import { HiOutlineDesktopComputer } from 'react-icons/hi'

const About = () => {
  return (
    <div className='h-full w-full flex flex-col overflow-y-scroll'>
      <h1 className='font-bold text-2xl text-white-1 mt-4 ml-4 md:text-xl'>ABOUT <span className='text-green-1'>ME</span></h1>
      <section className='w-full'>
        <div className='flex flex-col ml-6 mr-3 mt-7 md:flex-row lg:w-4/6'>
          <p className='text-white-1 md:mt-4 md:w-3/5 mb-7'>
            Eu anim dolor proident nostrud magna adipisicing mollit. Esse laborum minim aliquip magna mollit magna cillum irure excepteur commodo exercitation consectetur occaecat nisi. Ut nostrud duis ullamco incididunt exercitation qui duis nostrud. Officia aute ad do id velit non sit id duis elit minim ipsum.
          </p>
          <ul className='flex flex-col justify-evenly list-none md:ml-7 text-white-1'>
            <li className='font-semibold'>Birthday: <span className='font-normal text-green-1'>15/08/1997</span></li>
            <li className='font-semibold'>Location: <span className='font-normal text-green-1'>Entre Rios, Argentina</span></li>
            <li className='font-semibold'>Email: <span className='font-normal text-green-1'>sebaaguiar08@gmail.com</span></li>
            <li className='font-semibold'>Phone: <span className='font-normal text-green-1'>+54 3442 536874</span></li>
          </ul>
        </div>
      </section>
      <section>
        <h2 className='font-bold text-lg text-white-1 mt-8 ml-4 md:text-xl'>WHAT <span className='text-green-1'>I DO</span></h2>
        <div className='w-full flex flex-col mt-3 md:flex-row'>
          <div className='md:w-2/4 grid grid-cols-5 grid-rows-6'>
            <HiOutlineDesktopComputer className='col-start-1 col-end-1 row-start-1 row-end-1 h-10 w-10 text-white-1 ml-3' />
            <h3 className='text-lg text-white-1 col-start-2 col-end-5 row-start-1'>Back-end Developer</h3>
            {/* <p>Qui exercitation commodo eu aliqua laborum. Aute eu cupidatat incididunt pariatur non eu deserunt. Voluptate mollit culpa reprehenderit ut sint qui est ullamco. Consectetur voluptate amet anim cillum est excepteur excepteur irure aliqua cupidatat deserunt irure officia ullamco.</p> */}
          </div>
          <div className='md:w-2/4 grid grid-cols-5 grid-rows-6'>
            <HiOutlineDesktopComputer className='col-start-1 col-end-1 row-start-1 row-end-1 h-10 w-10 text-white-1' />
            <h3 className='text-lg text-white-1 col-start-2 col-end-5 row-start-1'>Back-end Developer</h3>
            {/* <p>Qui exercitation commodo eu aliqua laborum. Aute eu cupidatat incididunt pariatur non eu deserunt. Voluptate mollit culpa reprehenderit ut sint qui est ullamco. Consectetur voluptate amet anim cillum est excepteur excepteur irure aliqua cupidatat deserunt irure officia ullamco.</p> */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
