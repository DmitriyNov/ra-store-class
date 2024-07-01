import { Component } from "react";
import "./App.css"
import ShopItemClass from "./components/ShopItemClass.jsx"

class App extends Component {
  render() {

    const item = {
      brand: "Tiger of Sweden",
      title: "Leonard coat",
      description: "Minimalistic coat in cotton-blend",
      descriptionFull: "Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.",
      price: 399,
      currency: "£",
    }
    
    return (
      <div className="shopItem-viget">
        <ShopItemClass item={item} />
      </div>
    )
  }
}

export default App
