import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  // "Dal","Green vegetables","Roti","Milk","Rice"
  let foodItems = ["Dal", "Green vegetables", "Roti", "Milk", "Rice"];
  return (
    <>
      <h1>Healthy Food Items</h1>
      {foodItems.length === 0 ? <h3>i am still hungry.</h3> : null}
      <ul className="list-group">
        {foodItems.map(item => 
        <li key={item} className="list-group-item">{item}</li>
        )}
      </ul>
   </>
  )  
}

export default App;
