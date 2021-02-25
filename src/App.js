import React, { Component } from 'react';
import './App.css';

import {CardList} from './components/CardList/card-list.component';
import {SearchBox} from './components/SearchBox/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(users => this.setState({
      monsters: users
    }))
  }

  handleChange = e => {
    this.setState({
      searchField: e.target.value
    })
  }

  render() {
    const {monsters, searchField} = this.state;
    const filterMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <main className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox  
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filterMonsters} />        
      </main>
    );
  }
}

export default App;
