'use client'
import { GlobalContext } from '@/context/AppContext'

const Home = () => {
  const { sideActive } = GlobalContext()

  const bodyStyle = sideActive
    ? 'w-0'
    : 'w-full h-full flex flex-col justify-center place-items-center'

  return (
    <div className={bodyStyle}>
      <h1 className='font-bold text-white-1 text-3xl md:text-6xl lg:text-7xl'>
        SEBASTIAN <span className='text-green-1'>AGUIAR</span>
      </h1>
      <h2 className='text-grey-3 text-2xl md:text-4xl lg:text-5xl'>
        Back-end Developer
      </h2>
    </div>
  )
}

export default Home
