import { useMediaQuery } from "react-responsive"

const Description = () => {
  return (
    <div className='text-[#fdf6ef] font-Sora w-full p-10 lg:p-0 lg:w-[50%] lg:pl-20 lg:py-20 lg:pb-20'>
      <h2 className='font-DelaGothic text-5xl md:text-6xl mb-10 text-[#5935a4]'>About</h2>
      <p>
        <span className='font-bold'>GDSC VIT</span> is a student community at VIT Vellore.
        We strive to bring about technological innovations among students and we do so by providing a
        platform for them to exhibit their talents. We are a group of passionate designers,
        developers and managers who work together to bring about collaborative results that better the
        lives of everyone around us.
      </p>
      <br />
      <p>
        This 36-hour hackathon aims to provide talented and independent women with the platform and
        resources to help them grow in their desired field and contribute to society with impactful and
        beneficial solutions.
      </p>
      <br />
      <p>
        There is a minimum requirement of 50% female participation in each team,
        to ensure and promote women’s participation in tech and tech-related events.
      </p>
    </div>
  )
}

const RightImage = () => {
  return (
    <div className='w-full h-full lg:w-1/2 lg:p-14 flex justify-center items-center'>
      {/* <img src='https://picsum.photos/649/649' alt='About' className='w-full lg:w-2/3' /> */}
      <div className='w-[1/4] aspect-square bg-gray-400'></div>
    </div>

  )
}

const About = ({ myRef }) => {
  const isSmallScreen = useMediaQuery({query: '(max-width: 1023px)'})

  return (
    <section ref={myRef} className='flex flex-col items-center lg:flex-row w-full lg:h-screen overflow-hidden bg-[#f34c78] pb-10'>
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

export default About
