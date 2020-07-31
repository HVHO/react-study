import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: [

      ],
    }
  }

  updateInput(key, value) {
   this.setState({[key]:value}); 
  }

  addItem() {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice(),
    };

    const list = [...this.state.list];
    list.push(newItem);

    this.setState({
      list: list,
      newItem: '',
    });

  }

  deleteItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id != id);
    this.setState({
      list: updatedList,
    });
  }

  render() {
    return (
      <div className='App'>
        <h1 className='title'>Todo App</h1>
          Add a task!
        <br />
        <input
          type = 'text'
          placeholder = 'input things to do'
          value = {this.state.newItem}
          onChange = { i => this.updateInput('newItem' , i.target.value)}
        />
        <button onClick={() => this.addItem()}>
          add
        </button>
        <ul>
          {
            this.state.list.map(item => {
              return(
                <li key={item.id}>
                  {item.value}
                  <button onClick={() => this.deleteItem(item.id)}>
                    <i>X</i>
                  </button>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }

}

export default App;