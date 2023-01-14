import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  // Component State
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchTerm: "",
    };
  }

  // Getting Data once app is mounted
  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((promise) => {
        return promise.json();
      })
      .then((data) => {
        this.setState(() => {
          return {
            monsters: data,
          };
        });
      });
  }

  onSearchChange = (evt) => {
    const searchTerm = evt.target.value;
    this.setState(() => {
      return {
        searchTerm,
      };
    });
  };

  // Rendering Component
  render() {
    const { onSearchChange } = this;
    const { monsters, searchTerm } = this.state;

    const filteredMonsters = monsters.filter((mon) =>
      mon.name.toLocaleLowerCase().includes(searchTerm)
    );
    return (
      <div className="App">
        <h1 className="app-heading">Monster Rolodex</h1>
        <SearchBox
          onSearchChangeHandler={onSearchChange}
          placeholder="Search Monsters"
          className="search-box"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
export default App;
