import { Component } from 'react';
import './App.css';
import logo from './logo.svg';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    }
    console.log('constructor');
  }

  // When it first loads (mounts to the dom) only happens once
  async componentDidMount() { // its a lifycycle method
    console.log('componentDidMount');
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    this.setState(
      () => {
        return { monsters: users }
      },
      () => {
        console.log(this.state)
      }
    )
  }

  onSearchChange = (e) => {
    const searchField = e.target.value.toLowerCase();
    this.setState(() => {
      return {
        searchField
      }
    });
  }

  render() {
    console.log('render');

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters
      .filter((monster) => monster.name
        .toLowerCase()
        .includes(searchField));

    return (
      <div className="App">
        <input
          className='search-box'
          type='search'
          placeholder='Search Monsters'
          onChange={onSearchChange}
        />
        {filteredMonsters.map((monster) => (
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
