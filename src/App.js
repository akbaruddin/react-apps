import React from 'react';
import './App.css';

class Label extends React.Component{
  constructor(props){
    super(props);
    this.className='plain-label';
  }
  render(){
    return (
      <div className={this.className}>
      {this.props.children} 
      </div>
    );
  }
}

class SuccessLabel extends Label{
  constructor(props){
    super(props);
    this.className = this.className + ' success-label';
  }
}

class ErrorLabel extends Label{
  constructor(props){
    super(props);
    this.className = this.className + ' error-label';
  }
}

class Button extends React.Component{
  render(){
    return (
      <button className={this.props.className + ' plain-button'}>
      {this.props.children}
      </button>
    );
  }
}

class SuccessButton extends React.Component{
  render(){
    return <Button className='success-button'>{this.props.children}</Button>;
  }
}

class ErrorButton extends React.Component{
  render(){
    return <Button className='error-button'>{this.props.children}</Button>;  
  }
}

function App() {
  return (
    <div className="App">
      <Label> Plain Label </Label>
      <SuccessLabel> Success Label </SuccessLabel>
      <ErrorLabel> Error Label </ErrorLabel>

      <div>
        <Button> Plain Button </Button>
        <SuccessButton> Success Button </SuccessButton>
        <ErrorButton> Error Button </ErrorButton>
      </div>
    </div>
  );
}

export default App;
