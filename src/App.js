import React from 'react';
import './App.css';

class User extends React.Component {
  render() {
    return (<div>
      {this.props.name}
    </div>)
  }
}

User.defaultProps = {
  name: 'Stranger'
}

function App() {
  return (
    <div className="App">
      <p>
        Start editing to see some magic happen
        <User />
      </p>
    </div>
  );
}

export default App;
