/* eslint-disable react/prop-types */
function AddToCartButton({handleClick}){

    function handleKeyDown(event){
        if(event.key ==="Enter"){
            handleClick()
        }
    }

    return (
        <button className="add-to-cart-button" onClick={handleClick} onKeyDown={handleKeyDown}>
            <img src="./assets/images/icon-add-to-cart.svg" alt="shopping cart icon" />
            Add to Cart
        </button>
    )
}
export default AddToCartButton;