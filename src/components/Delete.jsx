import { Component } from 'react';
import './Delete.css';

class Delete extends Component {
    deleteCard = e => {
        e.stopPropagation();
        this.props.onDelete();
    };
    render() {
        return (
            <div className='delete' onClick={this.deleteCard}></div>
        );
    }
};
export default Delete;