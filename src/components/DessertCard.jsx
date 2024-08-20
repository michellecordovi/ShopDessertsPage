/* eslint-disable react/prop-types */
function DessertCard({src, name, category, price}) {
    return (
        <div className="dessert-card">
            <div className="dessert-image-container">
                <img src={src} alt={name} />
            </div>

            <div className="dessert-description">
                <p>{category}</p>
                <h3>{name}</h3>
                <p>{price}</p>
            </div>
        </div>
    )
}

export default DessertCard;