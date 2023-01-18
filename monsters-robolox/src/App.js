import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    }
  }

  // When it first loads (mounts to the dom) only happens once
  async componentDidMount() { // its a lifycycle method
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    this.setState(
      () => {
        return { monsters: users }
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
        {/* {filteredMonsters.map((monster) => (
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
        ))} */}
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
