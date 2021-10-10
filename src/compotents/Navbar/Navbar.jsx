import React, {useEffect} from 'react'
import { SiBeatsbydre } from "react-icons/si";

import './Navbar.scss'

function Navbar({homeScroll, specsScroll, caseScroll, productsScroll, specsRef, caseRef, producsRef, activeMenu, updateActiveMenu}) {
  
  useEffect(() => {
    window.addEventListener('scroll', function() {
      const srollW = Math.ceil(this.window.scrollY+1)
      if(0 <= srollW && srollW < specsRef.current.offsetTop){
        updateActiveMenu(1)
      }else if(specsRef.current.offsetTop <= srollW && srollW < caseRef.current.offsetTop){
        updateActiveMenu(2)
      }
      else if(caseRef.current.offsetTop <= srollW && srollW < producsRef.current.offsetTop){
        updateActiveMenu(3)
      }
      else if(producsRef.current.offsetTop <= srollW){
        updateActiveMenu(4)
      }
    });
  }, [specsRef, caseRef, producsRef, updateActiveMenu])

    return (
        <div className="Navbar">
          <div className="Navbar--container">
            <SiBeatsbydre />
              <ul className="Navbar--menu">
                <li onClick={homeScroll} className={activeMenu===1?'Navbar--item active':'Navbar--item'}>Home</li>
                <li onClick={specsScroll} className={activeMenu===2?'Navbar--item active':'Navbar--item'}>Specs</li>
                <li onClick={caseScroll} className={activeMenu===3?'Navbar--item active':'Navbar--item'}>Case</li>
                <li onClick={productsScroll} className={activeMenu===4?'Navbar--item active':'Navbar--item'}>Products</li>
              </ul>
          </div>
            
        </div>
    )
}

export default Navbar
