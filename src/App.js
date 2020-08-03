import React, { useState } from 'react';
import './App.css';

const App = () => {
  // Declare a new state variable, which we'll call "count"
  // count is value holder
  // setCount is function for update value
  // useState extract into two part 1. variable(count) and 2. function(setCount), passing parameter is initial value
  const [count, setCount] = useState(0);
  const [fruit] = useState('banana');
  const [user, setUser] = useState({ name: 'Gates' })

  return (
    <div className="App">
      Pure Function based. {count}
      <br />
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <br />
      Fruit {fruit}
      <br />
      User Name: {user.name}
      <br />
      <input value={user.name} onChange={(e) => setUser({ name: e.target.value})} />
    </div>
  )
}

export default App;
