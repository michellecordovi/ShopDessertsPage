import DessertCard from "./DessertCard";

function DessertGrid({desserts}) {
    return (
        desserts.map(dessert => {
            <DessertCard src={dessert.image.desktop} name={dessert.name} category={dessert.category} price={dessert.price} />
        })
    )
}

export default DessertGrid;