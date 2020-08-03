import React from 'react';
import './App.css';

class Profile extends React.Component {
  constructor(){
    super()
    this.state = {
      "admin": 'Non Admin'
    }
    this.changePermission = this.changePermission.bind(this);
  }

  changePermission() {
    this.setState({ 
      "admin": 'Admin' 
    })
  }

  render(){
    return (
      <div>
        <img src={this.props.logo_url} alt="test" height="250px" />
        <h1>{this.props.title} - {this.state.admin}</h1>
        <button onClick={this.changePermission}>Admin</button>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Profile
        logo_url="https://books.agiliq.com/projects/django-design-patterns/en/latest/_static/logo.png"
        title="Mobile App, Web App and API Development and More" 
      />
    </div>
  );
}

export default App;
