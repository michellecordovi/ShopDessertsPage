function ActiveCart(){
    return (
        <div id="active-cart">
            <div id="cart-grid"></div>

            <div id="order-total"></div>

            <img src="./assets/images/icon-carbon-neutral.svg" alt="This is a carbon-neutral delivery" />

            <button id="confirm-order-button">Confirm Order</button>
        </div>
    )
}

export default ActiveCart;