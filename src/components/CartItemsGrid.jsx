/* eslint-disable react/prop-types */
import CartItem from "./CartItem";

function CartItemsGrid({desserts, cartItems, setCartItems}) {

    return (
        <div id="cart-items-grid">
            {cartItems.map((item, index) => {
            return <CartItem key={`cart-item ${index}`} index={item} desserts={desserts} price={desserts[item].price} name={desserts[item].name} cartItems={cartItems} setCartItems={setCartItems} />
            })}
        </div>
        
    )
}

export default CartItemsGrid;