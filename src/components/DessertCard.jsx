/* eslint-disable react/prop-types */
import AddToCartButton from "./AddToCartButton";
import {useState, useEffect} from 'react'
import ItemCountButton from "./ItemCountButton";

function DessertCard({index, src, name, category, price, cartItems, setCartItems}) {
    const [isInCart, setIsInCart] = useState(false)
    const [itemCount, setItemCount]= useState(0)

    //changes displayed button based on whether or not the item is already in the cart or not
    useEffect(() => {
    if (!cartItems.includes(index)) {
        setItemCount(0);
        setIsInCart(false);
    }
}, [cartItems, index]);


    //handles click event for AddToCart button
    function handleClick(){
        if(!isInCart){
            setIsInCart(true);

            setCartItems(prev => {
                return [...prev, index]
            })

            setItemCount(itemCount + 1)
        }
    }

    //handles decrement function for item that is already in cart
    function handleDecrement(){
        setItemCount(itemCount - 1)

        setCartItems(prev => {
            const arrIndex = prev.findLastIndex(num => num === index)

            if(arrIndex !== -1){
                const updatedCart = [...prev];
                updatedCart.splice(arrIndex, 1)
                return updatedCart;
            }
                
            return prev;
        })
    }

    //handles increment function for item that is already in cart
    function handleIncrement(){
        setItemCount(itemCount + 1)

        setCartItems(prev => {
            return [...prev, index]
        })
    }

    return (
        <div className="dessert-card" tabIndex={0}>
            <div className="dessert-image-container">
                <img className={isInCart? "dessert-image is-in-cart" : "dessert-image"} src={src} alt={name} />
                {!isInCart ? <AddToCartButton handleClick={handleClick} />
                : <ItemCountButton handleDecrement={handleDecrement} handleIncrement={handleIncrement} itemCount={itemCount} />  }
                
                
            </div>

            <div className="dessert-description">
                <p className="dessert-category">{category}</p>
                <p className="dessert-name">{name}</p>
                <p className="dessert-price">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price)}</p>
            </div>
        </div>
    )
}

export default DessertCard;