import React from 'react';
import './App.css';

class LifeCycle extends React.Component {
  constructor() {
    super();
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    console.log('did mount')
    this.tickID = setInterval(
      () => this.tick(),
      1000
    )
  }
  
  componentWillMount() {
    console.log('will mount')
  }

  componentWillUnmount() {
    console.log('will unmount')
    clearInterval(this.tickID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <p>
          Start editing to see some magic happen :)
          <br />
          {this.state.date.toLocaleTimeString()}
        </p>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <LifeCycle />
    </div>
  );
}

export default App;
