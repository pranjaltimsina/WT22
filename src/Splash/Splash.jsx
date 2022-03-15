import React from 'react'

import { useMediaQuery } from 'react-responsive'

import Marquee from '../marquee/Marquee'

import {ReactComponent as GirlIllustration}  from '../assets/girl.svg'
import yearLogo from '../assets/2022.svg'
import hamburgerMenu from '../assets/hamburger-menu.svg'

const Splash = ({ navShower }) => {
  const handleClick = () => {
    console.log('Register')
  }
  const isSmallScreen = useMediaQuery({query: '(max-width: 767px)'})

  return (
    <>
      {isSmallScreen && (
        <section className='w-full h-screen bg-[#e5e5e5] bg-contain bg-right bg-no-repeat flex flex-col justify-between overflow-hidden'>
          {/* <div className='flex-grow overflow-hidden'>
            <img src={yearLogo} alt='2022' className='h-full' />
          </div> */}
          <div className='flex flex-col overflow-hidden flex-grow justify-between py-10'>
            <div className='w-full px-4 sm:px-10 h-max'>
              <img src={hamburgerMenu} onClick={() => navShower(true)} alt='menu' className='h-14 float-right cursor-pointer' />
            </div>
            <div className='my-24 sm:my-20 space-y-8'>
              <div className='text-6xl sm:text-7xl font-DelaGothic w-full flex flex-col items-center '>
                <h2 className='text-[#5935a4]'>Women</h2>
                <h2 className='text-[#ff7f4d]'>Techies</h2>
              </div>
              <p className='font-Sora text-center'>A 36 hour hack to ensure and promote women's participation in <br />tech and tech-related events</p>
            </div>
            <div className='w-full flex flex-row justify-center space-x-10 items-end mt-10'>
              <div className='w-[20%] h-1/2 border-t-[#ff7f4D] border-t-2'>
              </div>
              <button className='bg-[#f34c78] text-white font-DelaGothic w-[1/3]  px-14 py-3' onClick={handleClick}>Register</button>
              <div className='w-[20%] h-1/2 border-t-[#ff7f4D] border-t-2'>
              </div>
            </div>
          </div>
          <Marquee bgColor='bg-[#5935a4]' textColor='text-white'/>
        </section>
      )}
      {!isSmallScreen && (
        <section className='w-full h-screen bg-[#e5e5e5] flex flex-col justify-between overflow-hidden'>
          <div className='flex flex-row overflow-hidden flex-grow items-center'>
            <div className='w-[60%] flex flex-col items-center'>
              <div className='pt-40 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-DelaGothic'>
                <h2 className='text-[#5935a4]'>Women</h2>
                <h2 className='text-[#ff7f4d]'>Techies</h2>
              </div>
              <p className='font-Sora text-center mt-10'>A 36 hour hack to ensure and promote women's participation in <br />tech and tech-related events</p>
              <div className='w-full flex flex-row justify-center space-x-10 items-end mt-10'>
                <div className='w-[15%] h-1/2 border-t-[#ff7f4D] border-t-2'>
                </div>
                <button className='bg-[#f34c78] text-white font-DelaGothic w-[1/3]  px-14 py-3' onClick={handleClick}>Register</button>
                <div className='w-[15%] h-1/2 border-t-[#ff7f4D] border-t-2'>
                </div>
              </div>
            </div>
            <div className='w-[40%] overflow-hidden relative'>
              <div className='overflow-hidden'>
                <div className=''>
                  <img src={yearLogo} alt='2022' className='h-screen' />
                </div>
                <GirlIllustration className='absolute bottom-[-160px] w-[260px] translate-x-[160px] flex-shrink-0' />
              </div>
              <div className='absolute top-40 right-[12%]'>
                <img src={hamburgerMenu} onClick={() => navShower(true)} alt='menu' className='' />
              </div>
            </div>
          </div>
          <Marquee bgColor='bg-[#5935a4]' textColor='text-white'/>
        </section>
      )}
    </>
  )
}

export default Splash
