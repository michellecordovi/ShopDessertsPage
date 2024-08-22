/* eslint-disable react/prop-types */
function ConfirmationItem({ desserts, index, price, name, count}){
    return (
        <div className="confirmed-item">
            <img src={desserts[index].image.thumbnail}/>

            <div className="confirmed-item-info">
                <div className="confirmed-item-name-block">
                    <p>{name}</p>
                    <span>{count}x</span>
                    <span className="cart-item-price">@ {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price)}</span>
                </div>

                <div className="confirmed-item-price">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(count * price)}</div>
            </div>
        </div>
    )
}

export default ConfirmationItem;

