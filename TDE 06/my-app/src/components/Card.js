import './Card.css'
import {useState} from 'react'
const Card = ({titulo,texto,imagem,cor}) => {

    const [isColored, setIsColored] = useState(false);

    const handleClick = ()=>{
        setIsColored(!isColored);
    };

    const cardStyle = {
        backgroundColor: isColored?cor : "white",
        color: isColored? 'white' :'black'
    }
    return (
        <div className="card"
        onClick={handleClick}
        style={cardStyle}
        >
        <img src={imagem} alt={titulo}/>
            <h1>{titulo}</h1>
            <p>{texto}</p>
        </div>
    );
}

export default Card;