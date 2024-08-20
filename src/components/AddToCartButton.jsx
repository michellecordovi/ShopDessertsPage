/* eslint-disable react/prop-types */
function AddToCartButton({setIsInCart, isInCart, index, setCartItems, itemCount, setItemCount}){
    function handleClick(){
        if(!isInCart){
            setIsInCart(true);

            setCartItems(prev => {
                return [...prev, index]
            })

            setItemCount(itemCount + 1)
        }
    }

    return (
        <button className="add-to-cart-button" onClick={handleClick}>
            <img src="./assets/images/icon-add-to-cart.svg" alt="shopping cart icon" />
            <p>Add to Cart</p>
        </button>
    )
}
export default AddToCartButton;