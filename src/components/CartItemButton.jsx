/* eslint-disable react/prop-types */
function CartItemButton({index, setCartItems, itemCount, setItemCount}){
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

    function handleIncrement(){
        setItemCount(itemCount + 1)

        setCartItems(prev => {
            return [...prev, index]
        })
    }
    
    return (
        <button className="adjust-count-button">
            <img className="decrement-button" onClick={handleDecrement} src="./assets/images/icon-decrement-quantity.svg" />
            <p>{itemCount}</p>
            <img className="incriment-button" onClick={handleIncrement} src="./assets/images/icon-increment-quantity.svg" />
        </button>
    )
}
export default CartItemButton;