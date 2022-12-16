const BakeryItem = ({name, price, description, addToCart}) => { 
    return(
        <div>
            <h2>{name}</h2>
            <h2>${price}</h2>
            <p>{description}</p>
            <button onClick={() => addToCart(BakeryItem)}>Add to Cart</button>
        </div>
    )
}

export default BakeryItem
