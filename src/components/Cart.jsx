import EmptyCartImage from "./EmptyCartImage";

function Cart(){
    return (
        <aside id="cart">
            <h2>Your Cart(0)</h2>
            <EmptyCartImage/>
        </aside>
    )
}

export default Cart;