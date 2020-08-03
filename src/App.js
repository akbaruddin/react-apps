import React from 'react';
import './App.css';

function App() {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div className="App">
      <ul>
      {numbers.map((number, index) => (
        <li key={index}>
          Key - {number}
        </li>
      ))}
      </ul>
    </div>
  );
}

export default App;
