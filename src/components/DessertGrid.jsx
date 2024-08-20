/* eslint-disable react/prop-types */
import DessertCard from "./DessertCard";

function DessertGrid({desserts}) {
    return (
        <main>
            <h1>Desserts</h1>

            <section id="desserts-grid">
                {desserts.map((dessert) => {
                    return <DessertCard key={dessert.name} src={dessert.image.desktop} name={dessert.name} category={dessert.category} price={dessert.price} />
                })}
            </section>
        </main>
    )
}

export default DessertGrid;