/* eslint-disable react/prop-types */
import ConfirmationGrid from "./ConfirmationGrid";

function OrderConfirmedModal({desserts, uniqueItems, modalIsVisible, setModalIsVisible, setCartItems}) {
    function handleStartNewOrder(){
        setModalIsVisible(false)
        setCartItems([])
    }

    return (
        <section className={!modalIsVisible ?"order-confirmation not-visible" : "order-confirmation visible"}>
            <div id="modal-background"></div>

            <div id="order-confirmation-box">
                <div id="order-confirmation-header">
                    <img src="assets/images/icon-order-confirmed.svg"  alt="order confirmed checkmark" />
                    <h1>Order Confirmed</h1>
                    <p>We hope you enjoy your food!</p>
                </div>

                <ConfirmationGrid  desserts={desserts} uniqueItems={uniqueItems}/>

                <button id="start-new-order-button" onClick={handleStartNewOrder}>Start New Order</button>
            </div>
        </section>
    )
}

export default OrderConfirmedModal;