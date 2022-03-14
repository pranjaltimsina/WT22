import { useMediaQuery } from 'react-responsive'

import Navitem from "./Navitem"

import GDSCLogo from '../assets/GDSC Logo.svg'
import GDSCIcon from '../assets/GDSC Icon.svg'

import backIcon from '../assets/nav-exit.svg'
import Marquee from "../marquee/Marquee"

const Navpage = ({navHider}) => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 639px)' })

  return (
    <main className='h-screen w-screen bg-[#5935a4] flex flex-col overflow-hidden justify-between'>
      <header className='flex flex-row justify-between w-full overflow-hidden px-10 sm:px-20 md:px-24 lg:px-28 xl:px-32 2xl:px-36 pt-12'>
        <img src={isSmallScreen ? GDSCIcon : GDSCLogo} alt='GDSC VIT Vellore' className='h-[30px] sm:h-9 md:h-10 lg:h-11 xl:h-12 2xl:h-13'/>
        <img onClick={() => navHider(false)} src={backIcon} alt='back' className='h-[30px] cursor-pointer' />
      </header>
      <nav className='mt-4 px-10 sm:px-20 md:px-24 lg:px-28 xl:px-32 2xl:px-36'>
        <ul className='flex flex-row flex-wrap justify-start'>
          <Navitem text="Home" hasStar />
          <Navitem text="About" hasStar />
          <Navitem text="Timeline" hasStar />
          <Navitem text="FAQs" hasStar/>
          <Navitem text="Sponsors" hasStar/>
          <Navitem text="Contacts" />
        </ul>
      </nav>
      <Marquee bgColor='bg-white' textColor='text-black' />
    </main>
  )
}

export default Navpage
