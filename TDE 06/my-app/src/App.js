import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import './components/Card.css';
import Timer from './components/Timer';



function App() {

    const [cor, setCor] = useState('#ffffff');

    const handleColorChage = (event) =>{
      setCor(event.target.value)
    }


  return (
    <>
    <div>
      <input type="color"
             value="cor"
             onChange={handleColorChage}></input>
    </div>
      
      
      <div>
      <Timer/>
      </div>
      
    </>
  );
}

export default App;
