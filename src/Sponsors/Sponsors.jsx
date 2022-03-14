import brochureArrow from '../assets/brochure-arrow.svg'
import Sponsor from './Sponsor'

const Sponsors = () => {
  return (
    <section className='w-full h-max bg-[#fdf6ef] p-10 md:p-20 overflow-hidden'>
      <div className='w-full h-max flex flex-col space-y-5 md:space-y-0 md:flex-row justify-between items-center mb-10 overflow-hidden'>
        <h2 className='font-DelaGothic text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#5935a4]'>Sponsors</h2>
        <button className='bg-[#f34c78] inline-flex flex-row justify-center items-center space-x-4 px-8 py-3'>
          <img src={brochureArrow} alt='.' className='h-4' />
          <span className='font-DelaGothic text-sm sm:text-lg text-white'>Brochure</span>
        </button>
      </div>
      <div className='flex flex-row flex-wrap justify-between'>
        <Sponsor />
        <Sponsor />
        <Sponsor />
        <Sponsor />
        <Sponsor />
        <Sponsor />
        <Sponsor />
        <Sponsor />
        <Sponsor />
        <Sponsor />
      </div>
    </section>
  )
}

export default Sponsors
