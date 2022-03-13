import brochureArrow from '../assets/brochure-arrow.svg'
import Sponsor from './Sponsor'

const Sponsors = () => {
  return (
    <section className='w-screen h-screen bg-[#fdf6ef] p-20 overflow-hidden'>
      <div className='w-full h-max flex flex-row justify-between items-center mb-10'>
        <h2 className='font-DelaGothic text-6xl text-[#5935a4]'>Sponsors</h2>
        <button className='bg-[#f34c78] inline-flex flex-row justify-center items-center space-x-4 px-10 py-3'>
          <img src={brochureArrow} alt='.' />
          <span className='font-DelaGothic text-lg text-white'>Brochure</span>
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
