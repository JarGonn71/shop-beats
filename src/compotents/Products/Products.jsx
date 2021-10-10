import React from 'react'
import ProductCart from './ProductCart'
import './Products.scss'
import ScrollAnimation from 'react-animate-on-scroll';
import product1 from '../../img/products/product1.png'
import product2 from '../../img/products/product2.png'
import product3 from '../../img/products/product3.png'
import product4 from '../../img/products/product4.png'
import product5 from '../../img/products/product5.png'

const productItems = [
    {
        name:"Black",
        price:"249",
        image: product1,
    },
    {
        name:"Red Black",
        price:"249",
        image: product2,
    },
    {
        name:"Night Black",
        price:"249",
        image: product3,
    },
    {
        name:"Blue",
        price:"249",
        image: product4,
    },
    {
        name:"Twilight gray",
        price:"249",
        image: product5,
    },
    

]

function Products({producsRef}) {


    const items = productItems.map((product, index)=>{return <ProductCart key={index} {...product}/>})

    return (
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <div ref={producsRef} className="Products">
                <div className="Products--title">Choose Your Style</div>
                <div className="Products--items">
                    {items}
                </div>
            </div>
        </ScrollAnimation>
        
    )
}

export default Products
