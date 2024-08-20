/* eslint-disable react/prop-types */
import EmptyCartImage from "./EmptyCartImage";
import ActiveCart from "./ActiveCart";

function Cart({desserts, cartItems, setCartItems}){
    return (
        <aside id="cart">
            <h2>Your Cart({cartItems.length})</h2>
            {cartItems.length === 0 ? <EmptyCartImage/> : <ActiveCart desserts={desserts} cartItems={cartItems} setCartItems={setCartItems} />}
        </aside>
    )
}

export default Cart;