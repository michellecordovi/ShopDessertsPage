/* eslint-disable react/prop-types */
function CartItem({index, desserts, price, name, cartItems, setCartItems}){

    function handleClick(){
        const newArr = cartItems.filter(item => item !== index);
        setCartItems(newArr);
    }

    return (
        <div className="cart-item">
            <div className="cart-item-info">
                <p>{name}</p>
                <p>@{price}</p>
            </div>

            <button className="remove-cart-item-button" onClick={handleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>
            </button>
        </div>
    )
}

export default CartItem;