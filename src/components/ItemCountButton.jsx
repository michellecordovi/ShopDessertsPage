/* eslint-disable react/prop-types */
function ItemCountButton({index, setCartItems, itemCount, setItemCount}){
    
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
        <div className="adjust-count-button">
            <button className="decrement-button" onClick={handleDecrement}>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2"><path fill="#fff" d="M0 .375h10v1.25H0V.375Z"/></svg>
            </button>

            <p>{itemCount}</p>

            <button className="incriment-button" onClick={handleIncrement}>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>
            </button>
        </div>
    )
}
export default ItemCountButton;