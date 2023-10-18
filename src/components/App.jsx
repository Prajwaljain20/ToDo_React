import React, { Component } from 'react';
import './App.css';
import Card from './Card';

class App extends Component {
  state = {
    list: [],
    inputValue: ''
  };
  taskToogle = task => {
    const list = [...this.state.list];
    const index = list.indexOf(task);
    list[index].done = !list[index].done;
    this.setState({list});
    this.saveStateToLocalStorage(list);
  };
  addListItem = e => {
    if (e.keyCode === 13) {
      const inputValue = this.state.inputValue;
      const listObj = {};
      if (inputValue.length === 0) {
        return
      } else if (inputValue.indexOf(';') !== -1) {
        const listArray = inputValue.split(';');
        listObj.title = listArray[0];
        listObj.description = listArray[1];
      } else {
        listObj.title = '';
        listObj.description = inputValue;
      }
      listObj.done = false;
      const list = [...this.state.list];
      list.push(listObj);
      this.setState({list, inputValue: ''});
      this.saveStateToLocalStorage(list);
    }
  };
  deleteCard = card => {
    const list = [...this.state.list];
    const index = list.indexOf(card);
    list.splice(index, 1);
    this.setState({list});
    this.saveStateToLocalStorage(list);
  };
  getDataFromLocal = () => {
    let data = localStorage.getItem('list');
    if (data !== null) {
      this.setState({list: JSON.parse(data)});
    }
  };
  saveStateToLocalStorage = list => {
    localStorage.setItem('list', JSON.stringify(list));
  }
  onInputChange = event => {
    this.setState({inputValue: event.target.value});
  }
  componentDidMount() {
    this.getDataFromLocal();
  }
  render() {
    return (
      <React.Fragment>
        <h1>To_Do_</h1>
        <input type="text" placeholder='Enter an Action Item' value={this.state.inputValue} onChange={this.onInputChange} onKeyUp={this.addListItem}/>
        <div><span className='note'>Note:</span> Enter the task like this: <span className='advice'>Title; Add the description</span></div>
        <div className="container">
          {this.state.list.map(item => <Card card={item} key={item.title} onTaskToggle={this.taskToogle} onCardDelete={this.deleteCard} />)}
        </div>
      </React.Fragment>
    );
  }
}

export default App;