import { useState } from 'react'
import upArrow from '../assets/faq-arrow-down.svg'
import downArrow from '../assets/faq-arrow-up.svg'

const FAQ = ({question , answer}) => {
  const [expand, setExpand] = useState(false)


  return (
    <div className='bg-[#fdf6ef] w-[80%] md:w-[45%] h-max flex flex-col justify-between duration-500'>
      <div className='px-10 py-6 flex flex-row justify-between'>
        <span className='font-Sora'>{question}</span>
        <img onClick={() => setExpand((current) => !current)} src={expand ? downArrow : upArrow} alt='.' />
      </div>
      {expand && (
        <div className='flex flex-row justify-between px-10 pb-4'>
          <span className='text-[#5935a4]'>{answer}</span>
        </div>
      )}

    </div>
  )
}

export default FAQ
