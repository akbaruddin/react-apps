import React from 'react';
import './App.css';

function App() {
  const numbers = [1, 2, 3, 4, 5];
  const list = numbers.map(item  => <li>item - { item }</li>);

  return (
    <div className="App">
      <ul>{list}</ul>
    </div>
  );
}

export default App;
