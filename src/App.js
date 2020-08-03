import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  // Unlike componentDidMount or componentDidUpdate
  useEffect(() => {
    document.title = `${count} times`;
  });

  return (
    <div className="App">
      Pure Function based. {count}
      <br />
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}

export default App;
