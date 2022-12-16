import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem.js"

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  const [bakery] = useState([...bakeryData])
  const [cart, setCart] = useState([])

  const addtoCart = (item) => {
    setCart([...cart, item])
  }

  const removeFromCart = (item) => {
    setCart(cart.filter((x) => x.name !== item.name))
  }

  return (
    <div className="App">
      <div className="menu">
        <h1>My Bakery</h1>

        {bakeryData.map((item, index) => {
          
          return <div className="item">
            <BakeryItem
                key = {index}
                name = {item.name}
                price = {item.price}
                description = {item.description}
                addToCart={()=> addtoCart(item)}
            />
          </div>
        })}
      </div>
      
      <div className="cart">
          <h1>Your Cart</h1>
          {cart && cart.map((item) => {
            return <div className="item">
              <h2>{item.name}</h2>
              <h2>{item.price}</h2>
              <button onClick={() => removeFromCart(item)}>Remove from Cart</button>
            </div>
          }
        )}
        <h1 className="total">Total Cost: {cart.reduce((acc, item) => acc + item.price, 0)}</h1>

        {/* {arenas.reduce((acc, curr) => acc + parseFloat(curr.hours.$numberDecimal), 0)} */}
      </div>
    </div>
  )
}

export default App;
