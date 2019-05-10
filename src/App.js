import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    };
    this.handleInputText = this.handleInputText.bind(this);
  }

  handleInputText(event) {
    if (event.target.value) {
      this.setState({
        content: event.target.value
      });
    } else {
      this.setState({
        content: ''
      });
    }
  }

  render() {
    return (
      <div className="App">
        <label>Escribe aquí</label>
        <input
          type="text"
          className="input-text"
          id="input-text"
          onChange={this.handleInputText}
        />
        <p>{this.state.content}</p>
      </div>
    );
  }
}

export default App;
