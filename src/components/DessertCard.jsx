/* eslint-disable react/prop-types */
import AddToCartButton from "./AddToCartButton";

function DessertCard({src, name, category, price}) {
    return (
        <div className="dessert-card">
            <div className="dessert-image-container">
                <img className="dessert-image" src={src} alt={name} />
                <AddToCartButton/>
            </div>

            <div className="dessert-description">
                <p className="dessert-category">{category}</p>
                <p className="dessert-name">{name}</p>
                <p className="dessert-price">{price}</p>
            </div>
        </div>
    )
}

export default DessertCard;