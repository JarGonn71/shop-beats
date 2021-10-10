import React from 'react'
import './Specs.scss'
import beats from './../../img/beatsSpecs.png'
import { FaBluetoothB, FaMicrophone } from "react-icons/fa";
import { IoBatteryChargingSharp } from "react-icons/io5";
import { VscDebugDisconnect } from "react-icons/vsc";
import ScrollAnimation from 'react-animate-on-scroll';

const specsInfo = [
    {
        img:<FaBluetoothB/>,
        title: "Connection",
        elaboration: "Bluetooth v5.2"
    },
    {
        img:<IoBatteryChargingSharp/>,
        title: "Battery",
        elaboration: "Duration 40h"
    },
    {
        img:<VscDebugDisconnect/>,
        title: "Load",
        elaboration: "Fast charge 4.2-AAC"
    },
    {
        img:<FaMicrophone />,
        title: "Microphone",
        elaboration: "Supports Apple Siri and Google"
    },
]


function Specs({specsRef}) {

    return (
        <ScrollAnimation animateIn="fadeIn"  animateOnce={true}>
            <div ref={specsRef} className="Specs">
                <div className={ false ? "Specs--title active" : "Specs--title"}>Specs</div>
                <div className="Specs--content">
                    <div className="Specs--info">
                        {specsInfo.map((item, index)=>{
                            return <div key={index} className="Specs--itemInfo">
                                        {item.img}
                                        {item.title}
                                        <span>{item.elaboration}</span>
                                    </div>
                        })}
                    </div>
                    <div className="Specs--img">
                        <img src={beats} alt="img_specs" />
                    </div>
                </div>
                        
            </div>
        </ScrollAnimation>
       
    )
}

export default Specs
