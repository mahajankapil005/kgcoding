import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  // "Dal","Green vegetables","Roti","Milk","Rice"

  let foodItems = ["Dal", "Green vegetables", "Roti", "Milk", "Rice"];

  if (foodItems.length === 0) {
    return <h3>I am still hungry</h3>
  }
  return (
    <>
      <h1>Healthy Food Items</h1>
      <ul className="list-group">
        {foodItems.map((item)=>{
          <li className="list-group-item">{item}</li>
        })}
        
        
      </ul>
      {/* <ul className="list-group">
        {foodItems.map((item)=>{
          <li key={item} className="list-group-item">{item}</li>
        })}
         
      </ul> */}
    </>
  );
}

export default App;
