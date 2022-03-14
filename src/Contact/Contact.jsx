import { useMediaQuery } from "react-responsive"

import phoneSVG from '../assets/phone.svg'
import emailSVG from '../assets/email.svg'
import instagram from '../assets/instagram.svg'
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import linkedin from '../assets/linkedin.svg'

const Description = () => {
  return (
    <div className='text-[#fdf6ef] font-Sora w-full p-10 lg:p-0 lg:w-[50%] lg:pl-28 lg:py-36 lg:pb-20'>
      <h2 className='font-DelaGothic text-5xl md:text-6xl mb-10 text-[#5935a4]'>Contact</h2>
      <div className="flex flex-col justify-between text-[#47258c]">
        <ContactCard contactName='Chanakya Vivek Kapoor' email='chanakyavkapoor@gmail.com' contactPhone='+91 81304 88585' />
        <ContactCard contactName='Chanakya Vivek Kapoor' email='chanakyavkapoor@gmail.com' contactPhone='+91 81304 88585' />
        <Socials />
     </div>
    </div>
  )
}

const RightImage = () => {
  return (
    <div className='w-full h-full lg:w-1/2 lg:p-14 flex justify-center items-center'>
      <img src='https://picsum.photos/649/649' alt='About' className='w-full lg:w-2/3' />
    </div>

  )
}

const ContactCard = ({contactName, email, contactPhone }) => {
  return (
    <div className='flex flex-col justify-between'>
      <h4 className='font-DelaGothic text-white text-xl mb-6'>{contactName}</h4>
      <div className='inline-flex items-center mb-3 font-Sora font-bold'>
        <img src={emailSVG} alt='Mail' className='h-7' /><span className='ml-4'>{email}</span>
      </div>
      <div className='inline-flex items-center mb-6 font-Sora font-bold'>
        <img src={phoneSVG} alt='Phone' className='h-7' /><span className='ml-4'>{contactPhone}</span>
      </div>
    </div>
  )
}

const Socials = () => {
  return (
    <div className='flex flex-row justify-between mt-10 w-full lg:w-[45%]'>
      <img src={instagram} alt='instagram' className="w-11" />
      <img src={twitter} alt='instagram' className="w-11" />
      <img src={linkedin} alt='instagram' className="w-11" />
      <img src={facebook} alt='instagram' className="w-11" />
    </div>
  )
}

const Contact = () => {
  const isSmallScreen = useMediaQuery({query: '(max-width: 1023px)'})

  return (
    <section className = 'w-full flex flex-col items-center lg:flex-row lg:h-max overflow-hidden bg-[#ff7f4d] pb-10'>
      {isSmallScreen && (
        <>
          <RightImage />
          <Description />
        </>
      )}
      {!isSmallScreen && (
        <>
          <Description />
          <RightImage />
        </>
      )}

    </section>

  )
}
export default Contact
