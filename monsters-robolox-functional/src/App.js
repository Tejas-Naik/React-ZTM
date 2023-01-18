import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import { useState } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  console.log("render");
  const [searchField, setSearchField] = useState('')
  console.log(searchField);

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLowerCase();
    setSearchField(searchFieldString);
  }

  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox
        className="monsters-search-box"
        placeholder="Search Monsters"
        onChangeHandler={onSearchChange}
      />
      {/* <CardList monsters={filteredMonsters} /> */}
    </div>
  )
}

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: '',
//     }
//   }

//   // When it first loads (mounts to the dom) only happens once
//   async componentDidMount() { // its a lifycycle method
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await response.json();
//     this.setState(
//       () => {
//         return { monsters: users }
//       }
//     )
//   }

//   onSearchChange = (e) => {
//     const searchField = e.target.value.toLowerCase();
//     this.setState(() => {
//       return {
//         searchField
//       }
//     });
//   }

//   render() {

//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
//     const filteredMonsters = monsters
//       .filter((monster) => monster.name
//         .toLowerCase()
//         .includes(searchField));

//     return (
//       <div className="App">
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBox
//           className="monsters-search-box"
//           placeholder="Search Monsters"
//           onChangeHandler={onSearchChange}
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
