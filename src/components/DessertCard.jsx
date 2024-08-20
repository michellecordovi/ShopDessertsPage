/* eslint-disable react/prop-types */
import AddToCartButton from "./AddToCartButton";
import {useState, useEffect} from 'react'
import CartItemButton from "./CartItemButton";

function DessertCard({index, src, name, category, price, desserts, cartItems, setCartItems}) {
    const [isInCart, setIsInCart] = useState(false)
    const [itemCount, setItemCount]= useState(0)

    useEffect( () => {
        if(itemCount === 0){
            setIsInCart(false)
        }
    }, [itemCount])

    return (
        <div className="dessert-card">
            <div className="dessert-image-container">
                <img className="dessert-image" src={src} alt={name} />
                {!isInCart ? <AddToCartButton setIsInCart={setIsInCart} isInCart={isInCart} index={index} desserts={desserts} cartItems={cartItems} setCartItems={setCartItems} itemCount={itemCount} setItemCount={setItemCount} />
                : <CartItemButton setIsInCart={setIsInCart} isInCart={isInCart} index={index} desserts={desserts} cartItems={cartItems} setCartItems={setCartItems} itemCount={itemCount} setItemCount={setItemCount}  />  }
                
                
            </div>

            <div className="dessert-description">
                <p className="dessert-category">{category}</p>
                <p className="dessert-name">{name}</p>
                <p className="dessert-price">{price}</p>
            </div>
        </div>
    )
}

export default DessertCard;