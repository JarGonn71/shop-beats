import React ,{useState, useRef} from 'react'
import {Navbar, Home, Specs, Case, Products, Footer} from './compotents'

function App() {
  const homeRef = useRef(null)
  const specsRef = useRef(null)
  const caseRef = useRef(null)
  const producsRef = useRef(null)

  const [activeMenu, setActiveMenu] = useState(1)
  const updateActiveMenu = (index) => setActiveMenu(index)
  const homeScroll = () => homeRef && homeRef.current.scrollIntoView({behavior:"smooth", block:"start"}) 
  const specsScroll = () => specsRef && specsRef.current.scrollIntoView({behavior:"smooth", block:"start"}) 
  const caseScroll = () => caseRef && caseRef.current.scrollIntoView({behavior:"smooth", block:"start"}) 
  const productsScroll = () => producsRef && producsRef.current.scrollIntoView({behavior:"smooth", block:"start"}) 


  return (
    <div className="App">
      <div className="parallax">
        <Navbar 
          homeScroll={homeScroll} 
          specsScroll={specsScroll} 
          caseScroll={caseScroll} 
          productsScroll={productsScroll}
          homeRef={homeRef}
          specsRef={specsRef}
          caseRef={caseRef}
          producsRef={producsRef}
          updateActiveMenu={updateActiveMenu}
          activeMenu={activeMenu}
        />
        <div className="wrapper">
          <Home activeMenu={activeMenu}  homeRef={homeRef}/>
          <Specs activeMenu={activeMenu} specsRef={specsRef}/>
          <Case activeMenu={activeMenu} caseRef={caseRef}/>
          <Products activeMenu={activeMenu} producsRef={producsRef}/>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
