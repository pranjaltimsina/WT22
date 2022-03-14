import { useMediaQuery } from "react-responsive"

const Description = () => {
  return (
    <div className='text-[#fdf6ef] font-Sora w-full p-10 lg:p-0 lg:w-[50%] lg:pl-20 lg:py-20 lg:pb-20'>
      <h2 className='font-DelaGothic text-5xl md:text-6xl mb-10 text-[#5935a4]'>Contact</h2>
      <div className="flex flex-col justify-between">
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
      <h4>{contactName}</h4>
      <div>{email}</div>
      <div>{contactPhone}</div>
    </div>
  )
}

const Socials = () => {
  return (
    <div className='flex flex-row justify-between'>

    </div>
  )
}

const Contact = () => {
  const isSmallScreen = useMediaQuery({query: '(max-width: 1023px)'})

  return (
    <section className = 'flex flex-col items-center lg:flex-row w-full lg:h-max overflow-hidden bg-[#f34c78] pb-10'>
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
