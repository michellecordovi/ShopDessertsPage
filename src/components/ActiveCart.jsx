/* eslint-disable react/prop-types */
import CartItemsGrid from "./CartItemsGrid";

function ActiveCart({desserts, cartItems, setCartItems, uniqueItems, setModalIsVisible, total}){
    //handles click for confirm order button
    function handleConfirmOrder(){
        setModalIsVisible(true)
    }

    return (
        <div id="active-cart">

            <CartItemsGrid desserts={desserts} cartItems={cartItems} setCartItems={setCartItems} uniqueItems = {uniqueItems} />

            <div id="order-total">
                <p>Order Total</p>
                <h2>{total}</h2>
            </div>

            <div id="carbon-neutral-label">
                <img src="./assets/images/icon-carbon-neutral.svg" alt="This is a carbon-neutral delivery" />
                <p id="carbon-neutral-statement">This is a <span>carbon-neutral</span> delivery</p>
            </div>

            <button id="confirm-order-button" onClick={handleConfirmOrder}>Confirm Order</button>
        </div>
    )
}

export default ActiveCart;