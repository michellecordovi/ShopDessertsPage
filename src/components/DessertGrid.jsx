/* eslint-disable react/prop-types */
import DessertCard from "./DessertCard";

function DessertGrid({desserts, cartItems, setCartItems}) {
    return (
        <main>
            <h1>Desserts</h1>

      <section id="desserts-grid">
        {desserts.map((dessert, index) => {
                    return <DessertCard key={index} index = {index} src={window.innerWidth > 1000 ? dessert.image.desktop : dessert.image.mobile} name={dessert.name} category={dessert.category} price={dessert.price} desserts={desserts} cartItems={cartItems} setCartItems={setCartItems} />
                })}
            </section>
        </main>
  );
}

export default DessertGrid;
