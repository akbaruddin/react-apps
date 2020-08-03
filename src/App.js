import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

class User extends React.Component {
  render() {
    return (<div>
      {this.props.name} {this.props.num}
    </div>)
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  num: PropTypes.number
}

function App() {
  return (
    <div>
      <p>
        Start editing to see some magic happen
        <User name="String" num={1} />
      </p>
    </div>
  );
}

export default App;
