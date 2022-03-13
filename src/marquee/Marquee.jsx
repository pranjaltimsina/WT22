import MarqueeSpan from "./MarqueeSpan"

const Marquee = ({ bgColor, textColor}) => {
  return (
    <marquee className={`${bgColor} ${textColor} h-max text-xl sm:text-2xl md:text-3xl font-bold py-2`} behavior='scroll' loop='infinite'>
      <MarqueeSpan middleText='for' emoji='💖' middleColor='text-pink-500' />
      <MarqueeSpan middleText='like' emoji='🌟' middleColor=''/>
      <MarqueeSpan middleText='with'emoji='💅' middleColor=''/>
      <MarqueeSpan middleText='for' emoji='💖' middleColor='text-pink-500' />
      <MarqueeSpan middleText='like' emoji='🌟' middleColor=''/>
      <MarqueeSpan middleText='with'emoji='💅' middleColor=''/>
      <MarqueeSpan middleText='for' emoji='💖' middleColor='text-pink-500' />
      <MarqueeSpan middleText='like' emoji='🌟' middleColor=''/>
      <MarqueeSpan middleText='with'emoji='💅' middleColor=''/>
      <MarqueeSpan middleText='for' emoji='💖' middleColor='text-pink-500' />
      <MarqueeSpan middleText='like' emoji='🌟' middleColor=''/>
      <MarqueeSpan middleText='with'emoji='💅' middleColor=''/>
      <MarqueeSpan middleText='for' emoji='💖' middleColor='text-pink-500' />
      <MarqueeSpan middleText='like' emoji='🌟' middleColor=''/>
      <MarqueeSpan middleText='with'emoji='💅' middleColor=''/>
    </marquee>
  )
}

export default Marquee
