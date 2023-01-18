import { Component } from 'react';
import './App.css';
import logo from './logo.svg';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    }
  }

  // When it first loads (mounts to the dom) only happens once
  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then(response => response.json()
  //       .then(users => console.log(users))
  //     )
  // }

  async componentDidMount() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    this.setState(
      () => {
        return { monsters: users }
      }
    )
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => (
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
