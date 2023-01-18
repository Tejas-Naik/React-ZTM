import { Component } from 'react';
import './App.css';
import logo from './logo.svg';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstName: "Tejas", lastName: "Naik" },
      company: 'Facebook'
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi, I am  {this.state.name.firstName} {this.state.name.lastName}. I work at  {this.state.company}
          </p>
          <button onClick={() => {
            // This code runs asynchronously (you cant see the updated state in console)
            // this.setState({ name: { firstName: "Andrei", lastName: "Neaogie" } });

            // Synchronous Way
            this.setState(
              // Updater function
              () => {
                return (
                  { name: { firstName: "Andrei", lastName: "Neaogie" } }
                )
              },
              // Callback function
              () => {
                console.log(this.state)
              });
          }}>
            Change Name
          </button>

        </header>
      </div>
    );
  }
}

export default App;
