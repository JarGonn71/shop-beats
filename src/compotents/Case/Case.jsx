import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import caseImg from '../../img/case1.png'
import beats_3Img from '../../img/beats_3.png'
import './Case.scss'
import { FiInfo } from "react-icons/fi";
import { RiShoppingBagLine } from "react-icons/ri";

function Case({caseRef}) {
    return (
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
             <div ref={caseRef} className="Case">
            <div className="Case--title">Case</div>
            <div className="Case--content">
                <div className="Case--img">
                    <img src={caseImg} alt="img_case" />
                </div>
                <div className="Case--info">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique iure cumque ipsa est assumenda quod libero iste debitis hic aspernatur, sunt porro laborum eligendi perferendis nobis, voluptate quaerat! Laudantium, dolores?</p>
                    <div className="Case--btn">
                        <FiInfo/>
                        More info
                    </div>
                </div>
            </div>
            <ScrollAnimation animateIn="fadeInTwo" animateOnce={true}>
                <div className="windowGet">
                    <div className="windowGet--info">
                        <div className="windowGet--title">
                            immerse yourself in your music
                        </div>
                        <p>Get it now, up to 50% off.</p>
                        <div className="windowGet--btn">
                            <RiShoppingBagLine/> Shop Now
                        </div>
                    </div>
                    <div className="windowGet--image">
                        <img src={beats_3Img} alt="img_getbeats" />
                    </div>
                </div>
            </ScrollAnimation>
           
            
        </div>

        </ScrollAnimation>
       
    )
}

export default Case
