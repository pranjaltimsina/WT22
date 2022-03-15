import { useState, useEffect, useRef } from 'react'

import About from './About/About'
import Navpage from './navpage/Navpage'
import Splash from './Splash/Splash'
import Sponsors from './Sponsors/Sponsors'
import Timeline from './Timeline/Timeline'
import Contact from './Contact/Contact'
import FAQs from './FAQs/FAQs'

const App = () => {

  let aboutRef = useRef()
  let timelineRef = useRef()
  let faqRef = useRef()
  let sponsorsRef = useRef()
  let contactRef = useRef()

  const [showNav, setShowNav] = useState(false)
  const [inView, setInView] = useState(1)
  // 0 -> navpage in view
  // 1 -> splash
  // 2 -> about
  // 3 -> timeline
  // 4 -> faq
  // 5 -> sponsors
  // 6 -> contact

  const scrollHook = () => {
    switch (inView) {
      case 1:
        window.scrollTo({ behavior: 'smooth', top: window.top })
      break;
      case 2:
        window.scrollTo({ behavior: 'smooth', top: aboutRef.current.offsetTop })
      break;
      case 3:
        window.scrollTo({ behavior: 'smooth', top: timelineRef.current.offsetTop })
      break;
      case 4:
        window.scrollTo({ behavior: 'smooth', top: faqRef.current.offsetTop })
      break;
      case 5:
        window.scrollTo({ behavior: 'smooth', top: sponsorsRef.current.offsetTop })
      break;
      case 6:
        window.scrollTo({ behavior: 'smooth', top: contactRef.current.offsetTop })
      break;
      default:
        break;
    }
  }

  useEffect(scrollHook, [inView])
  return (
    <>
      {showNav && (
        <Navpage  navHider={setShowNav} viewSetter={setInView} />
      )}

      {!showNav && (
        <>
          <Splash navShower={setShowNav} viewSetter={setInView} />
          <About myRef={aboutRef}  />
          <Timeline myRef={timelineRef}  />
          <FAQs myRef={faqRef}  />
          <Sponsors myRef={sponsorsRef}  />
          <Contact myRef={contactRef}  />
        </>
      )}
    </>

  )
}

export default App
