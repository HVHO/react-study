import React, { Component } from 'react';
import './App.css';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {

  id = 0;

  state = {
    information : [
    ]
  }

  handleCreate = (data) => {
    console.log({data});
    const { information } = this.state;
    this.setState(
      {information: information.concat({id: this.id++, ...data})}
    ) 
  }

  render() {
    return (
      <div>
        <PhoneForm
          onCreate={this.handleCreate}
        />
        <PhoneInfoList data={this.state.information}/>
        <div>{JSON.stringify(this.state)}</div>
      </div>
    );
  }
}

export default App;
