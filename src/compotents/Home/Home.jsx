import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import preview from '../../img/beats3.png'
import { RiShoppingBagLine } from "react-icons/ri";
import './Home.scss'


function Home({homeRef}) {
    return (
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <div ref={homeRef} className="block1">
          <div className="block1--imageBox">
            <img src={preview} alt="img-beats"/>
          </div>
          <div className="block1--info">
              <h1>On ear</h1>
              <div className="title">Beats 3</div>
              <p>Overview</p>
              <div className="descriptions">
                Enjoy award-winning Beats sound with wireless listening freedom and a sleek, streamlined design with comfortable padded earphones, delivering first-rate playback.
              </div>
              <div className="block1--price">
                  <RiShoppingBagLine/> add to Bag <span>$299</span>
              </div>
          </div>
        </div>
      </ScrollAnimation>
        
    )
}

export default Home
