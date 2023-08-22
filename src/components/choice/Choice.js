import { Pick } from '../pick/Pick';
import './Choice.css';

function Choice({ choice,handleClick }) {
    return (
        <div className="Choice" onClick={handleClick}>
            <img className="Image" src={choice.image}></img>
            <h3>{choice.title}</h3>
        </div>
    )
}

export { Choice }