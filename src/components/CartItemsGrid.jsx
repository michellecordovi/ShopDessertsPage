/* eslint-disable react/prop-types */
import CartItem from "./CartItem";

function CartItemsGrid({desserts, cartItems, setCartItems}) {
    // Group items by name and count their occurrences
    const uniqueItems = cartItems.reduce((acc, item) => {
        const itemName = desserts[item].name;
        if (!acc[itemName]) {
            acc[itemName] = { index: item, count: 0 };
        }
        acc[itemName].count++;
        return acc;
    }, {});

    return (
        <div id="cart-items-grid">
            {Object.keys(uniqueItems).map((itemName, index) => {
                const { index: itemIndex, count } = uniqueItems[itemName];
                return (
                    <CartItem
                        key={`cart-item-${index}`}
                        index={itemIndex}
                        desserts={desserts}
                        price={desserts[itemIndex].price}
                        name={desserts[itemIndex].name}
                        count={count} 
                        cartItems={cartItems}
                        setCartItems={setCartItems}
                    />
                );
            })}
        </div>
    );
}

export default CartItemsGrid;
