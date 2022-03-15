// import { useState } from 'react'

// import dayOne from '../assets/dayOne.png'
// import dayTwo from '../assets/dayTwo.svg'

import timeline from '../assets/Timeline.png'

const Timeline = ({ myRef }) => {
  // const [selected, setSelected] = useState(0)
  // const active = 'text-[#5935a4] underline underline-offset-8 cursor-pointer'
  // const passive = 'text-passive cursor-pointer'
  // return (
  //   <section ref={myRef} className='h-screen w-full bg-[#e5e5e5] overflow-hidden'>
  //     <h2 className='font-DelaGothic text-5xl md:text-6xl text-[#ff7f4d] p-10'>
  //       Timeline
  //     </h2>
  //     <div className="w-full h-max flex flex-row justify-start space-x-4 font-Sora pl-10 font-bold">
  //       <span onClick={() => setSelected(0)} className={selected === 0 ? active : passive}>9th April</span>
  //       <span onClick={() => setSelected(1)} className={selected === 1 ? active : passive}>10th April</span>
  //     </div>
  //     <div>
  //       {selected === 0 && (
  //         <img src={dayOne} alt='Day 1 Timeline' />
  //         )}
  //       {selected === 1 && (
  //         <img src={dayTwo} alt='Day 2 Timeline' />
  //       )}
  //     </div>
  //   </section>
  // )

  return (
    <section ref={myRef} className='overflow-auto w-screen block'>
      <img src={timeline} alt='Timeline' className='block min-w-min md:min-w-0 max-w-[100vw] ' />
    </section>
  )
}

export default Timeline
