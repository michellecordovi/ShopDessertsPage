function OrderConfirmedModal({desserts, modalIsVisible, setModalIsVisible}) {
    return (
        <section className={!modalIsVisible ?"order-confirmation not-visible" : "order-confirmation visible"}>
            <div id="modal-background"></div>

            <div id="order-confirmation-box">
                <div id="order-confirmation-header">
                    <img src="assets/images/icon-order-confirmed.svg"  alt="order confirmed checkmark" />
                    <h1>Order Confirmed</h1>
                    <p>We hope you enjoy your food!</p>
                </div>

                <div id="order-confirmation-grid"></div>

                <button id="start-new-order-button">Start New Order</button>
            </div>
        </section>
    )
}

export default OrderConfirmedModal;