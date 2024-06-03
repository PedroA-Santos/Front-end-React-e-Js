import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import './components/Card.css';



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
      <Card imagem="https://i0.wp.com/rapmidia.com.br/wp-content/uploads/2023/05/Kyan-Brinks.jpg" texto="O maior do Rap" titulo="KYAN"
      cor={cor}/>
      <Card imagem="https://rollingstone.uol.com.br/media/uploads/mano_brown_vaicinacao_vacina_pandemia_shows_racionais_mcs.jpg" texto="Mano Brown" titulo="RACIONAIS"
      cor={cor}/>
      <Card imagem="https://br.web.img3.acsta.net/c_310_420/pictures/18/08/08/18/23/1187644.jpg" texto="Ator Brabo" titulo="MICHAEL B. JORDAN" 
      cor={cor}/>
      
    </>
  );
}

export default App;
