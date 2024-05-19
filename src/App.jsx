import "./App.css"
import ShopItemClass from "./components/ShopItemClass.jsx"

const item = {
  brand: "Tiger of Sweden",
  title: "Leonard coat",
  description: "Minimalistic coat in cotton-blend",
  descriptionFull: "Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.",
  price: 399,
  currency: "£",
}

const shopItemClass = new ShopItemClass(item);

class App {
  render() {
    return (
      <div className="shopItem-viget">
        {shopItemClass.render()}
      </div>
    )
  }
}

export default App
