import navStar from '../assets/nav-star.svg'

const Navitem = ({ text, hasStar, viewSetter, navHider }) => {
  const handleClick = () => {
    navHider()
    viewSetter()
  }
  return (
    <li onClick={handleClick} className='flex flex-row items-center w-full md:w-[45%]'>
      <a href={`#${text}`} className='text-[#ff7f4d] font-medium font-DelaGothic text-3xl py-5 sm:text-[2.5rem] sm:py-6 md:text-[2.75rem] md:py-12 lg:text-6xl lg:py-12 xl:text-7xl xl:py-12 hover:text-[#f34c78] duration-500'>
        {text}
      </a>
      {hasStar && (
        <>
          &nbsp; &nbsp; <img src={navStar} alt='.' className='h-6 fill-white'/>
        </>
      )}
    </li>
  )
}

export default Navitem
