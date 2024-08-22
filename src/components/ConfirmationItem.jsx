/* eslint-disable react/prop-types */
function ConfirmationItem({ desserts, price, name, count}){
    return (
        <div className="confirmed-item">
            <div className="cart-item-info">
                <p>{name}</p>
                <p>@{price}</p>
                <p>Quantity: {count}</p>
            </div>
        </div>
    )
}

export default ConfirmationItem;