import './Card.css';
import Delete from './Delete';

const Card = props => {
    return (
        <div className='card' onClick={() => props.onTaskToggle(props.card)}>
            <h1 className={props.card.done ? 'strike' : ''}>{props.card.title}</h1>
            <p className={props.card.done ? 'strike' : ''}>{props.card.description}</p>
            <Delete onDelete={() => props.onCardDelete(props.card)} />
        </div>
    );
}
export default Card;