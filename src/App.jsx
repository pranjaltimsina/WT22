import { useState } from 'react'

import About from './About/About'
import Navpage from './navpage/Navpage'
import Splash from './Splash/Splash'
import Sponsors from './Sponsors/Sponsors'
import Timeline from './Timeline/Timeline'
import Contact from './Contact/Contact'
import FAQs from './FAQs/FAQs'

const App = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <>
      {showNav && (
        <Navpage  navHider={setShowNav} />
      )}

      {!showNav && (
        <>
          <Splash navShower={setShowNav}/>
          <About />
          <Timeline />
          <FAQs />
          <Sponsors />
          <Contact />
        </>
      )}
    </>

  )
}

export default App
