import React from 'react'
import { RiShoppingBagLine } from "react-icons/ri";

function ProductCart({name, price, image}) {
    return (
        <div className="productCart">
            <div className="productCart--image">
                {image &&<img src={image} alt={`img_${name}`} />}
            </div>
            <div className="productCart--info">
                <span>{name}</span>
                <p>${price}</p>
            </div>   
            <div className="productCart--btn">
                <RiShoppingBagLine/>
            </div>         
        </div>
    )
}

export default ProductCart
