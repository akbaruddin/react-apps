import React from 'react';
import './App.css';

class Welcome extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      max: 20 
    }
  }

  render() {
    return <h1>Hello, {this.props.name}! Max {this.state.max}</h1>;
  }
}

function App() {
  return (
    <div className="App">
      <Welcome name="World" />
    </div>
  );
}

export default App;
