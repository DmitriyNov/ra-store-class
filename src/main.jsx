import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import "./main.css"

const app = new App();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {app.render()}
  </React.StrictMode>,
)
