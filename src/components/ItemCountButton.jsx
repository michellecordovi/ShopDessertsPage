/* eslint-disable react/prop-types */
function ItemCountButton({itemCount, handleIncrement, handleDecrement}){

    function handleDecrementKeyDown(event){
        if(event.key ==="Enter"){
            event.preventDefault()
            handleDecrement()
        }
    }

    function handleIncrementKeyDown(event){
        if(event.key ==="Enter"){
            event.preventDefault()
            handleIncrement()
        }
    }
    
    return (
        <div className="adjust-count-button">
            <button className="decrement-button" onClick={handleDecrement} onKeyDown={handleDecrementKeyDown}>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2"><path fill="#fff" d="M0 .375h10v1.25H0V.375Z"/></svg>
            </button>

            {itemCount}

            <button className="incriment-button" onClick={handleIncrement} onKeyDown={handleIncrementKeyDown}>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>
            </button>
        </div>
    )
}
export default ItemCountButton;             
