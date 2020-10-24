import React, {Component} from 'react';
import logo from './logo.js';
import './App.css';



class App extends Component {

  render() {
    return (
      <body>
        
        logo.render();
          
        <div>
          <div style={{border: '1px', solid: 'gold', float: 'left', width: '60%', height: '400px'}}>
            youtube player
          </div>
          <div style={{border: '1px', solid: 'gold', float: 'left', width: '40%', height: '400px'}}>
            play list
         </div>
        </div>
      </body>
    )
  }
}

export default App;
