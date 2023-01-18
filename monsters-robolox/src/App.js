import { Component } from 'react';
import './App.css';
import logo from './logo.svg';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Linda",
          id: "123ertd2"
        },
        {
          name: "Frank",
          id: "123er5tg2"
        },
        {
          name: "Jacky",
          id: "123er34df"
        },
        {
          name: "Andrei",
          id: "123ere5r2"
        }
      ],
    }
  }
  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => <div key={monster.id}><h1>{monster.name}</h1></div>)}
      </div>
    );
  }
}

export default App;
