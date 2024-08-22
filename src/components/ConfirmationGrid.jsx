/* eslint-disable react/prop-types */
import ConfirmationItem from './ConfirmationItem'

function ConfirmationGrid({desserts, uniqueItems}){

    return (
        <div id="order-confirmation-grid">
            {Object.keys(uniqueItems).map((itemName, index) => {
                const { index: itemIndex, count } = uniqueItems[itemName];
                return (
                    <ConfirmationItem
                        key={`cart-item-${index}`}
                        index={itemIndex}
                        desserts={desserts}
                        price={desserts[itemIndex].price}
                        name={desserts[itemIndex].name}
                        count={count} 
                    />
                );
            })}

            <div id="confirmation-order-total">
                <p>Order Total</p>
                <h2>$</h2>
            </div>
        </div>
    )
}
export default ConfirmationGrid;