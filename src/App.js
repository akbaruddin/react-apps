import React from 'react';
import './App.css';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      init: 0
    };
    // This binding is necessary to make `this` work in the callback
    this.less = this.less.bind(this);
    this.plus = this.plus.bind(this);
  }

  less() {
    this.setState((state) => ({
      init: state.init - 1
    }))
  }

  plus() {
    this.setState((state) => ({
      init: state.init + 1
    }))
  }

  render() {
    return (
      <div>
        <button onClick={this.less} className="button">-</button>
        <span style={{ fontSize: '40px', padding: '0 10px' }}>{this.state.init}</span>
        <button onClick={this.plus} className="button">+</button>
      </div>
    );
  }
}

class HandleApp extends React.Component {
  handleClick(e) {
    alert(e.type)
    console.log(e.currentTarget.innerHTML)
  }
  
  handleDelete(args) {
    console.log(args)
  }

  render() {
    return (
      <div>
        <button onClick={(e) => this.handleClick(e)}>
          Alert Click
        </button>
        {/* pass an extra parameter to an event handler */}
        <button onClick={this.handleDelete.bind(this, '5')}>Delete Row</button>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Counter />
      <br />
      <br />
      <HandleApp />
    </div>
  );
}

export default App;
