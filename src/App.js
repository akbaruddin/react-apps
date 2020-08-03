import React from 'react';
import './App.css';

// simple props pass
const Header = (props) => <h1>{props.name}</h1>

// extract method for props
const Footer = ({ name }) => <footer>{name}</footer>


function App() {
  return (
    <div className="App">
      <Header name="Functional Header"/>
      <Footer name="Functional Footer" />
    </div>
  );
}

export default App;
