const MarqueeSpan = ({ middleText, emoji, middleColor }) => {
  return (
    <span className='align-middle'>
      hack<span className={middleColor}>{middleText}</span>agirl {emoji} &nbsp;
    </span>
  )
}

export default MarqueeSpan
