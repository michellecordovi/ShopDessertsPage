/* eslint-disable react/prop-types */
function CartItem({ desserts, price, name, count, cartItems, setCartItems}) {

    function handleClick() {
        // Remove all instances of the item from the cart
        const newArr = cartItems.filter(item => desserts[item].name !== name);
        setCartItems(newArr);
    }

    return (
        <div className="cart-item">
            <div className="cart-item-info">
                <p>{name}</p>
                <span>{count}x</span>
                <span className="cart-item-price">@ {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price)}</span>
                <span className="cart-item-total">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(count * price)}</span>
            </div>

            <button className="remove-cart-item-button" onClick={handleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                    <path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/>
                </svg>
            </button>
        </div>
    );
}

export default CartItem;