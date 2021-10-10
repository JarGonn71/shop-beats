import React from 'react'
import { SiBeatsbydre } from "react-icons/si";
import { IoPaperPlaneSharp } from "react-icons/io5";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";


import './Footer.scss'

function Footer() {
    return (
        <div className="Footer">
            <div className="Footer--icon">
                <SiBeatsbydre/>
            </div>
            <ul className="Footer--info">
                <span>Products</span>
                <li>Headphones</li>
                <li>Earphones</li>
                <li>Earbuds</li>
                <li>Accesories</li>

            </ul>
            <ul className="Footer--info">
                <span>Support</span>
                <li>Product help</li>
                <li>Register</li>
                <li>Updates</li>
                <li>Provides</li>
            </ul>
            <div className="Footer--contact">
                <div className="Footer--search">
                    <input type="text" placeholder="Email"/>
                    <div className="Footer--emailBtn"><IoPaperPlaneSharp/> Subscribe</div>
                </div>
                <div className="Footer--socialNetworks">
                    <div><FaFacebookF/></div>
                    <div><BsInstagram/></div>
                    <div><BsTwitter/></div>
                </div>
            </div>

        </div>
    )
}

export default Footer
