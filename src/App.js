import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box-component';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component{
  constructor(){
    super();
    this.state={
      monsters: [],
      searchfield: ''
    };
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(users => this.setState({monsters : users}));
  }
  
  changeHandler = (param) => {
    this.setState({searchfield : param.target.value},() => console.log(this.state));
  }

  render(){
    const {monsters, searchfield} = this.state;
    const filtered = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchfield.toLowerCase())
      );

    return (
      
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
        placeholder='search monsters' 
        handlechange={this.changeHandler}
        />
        <CardList monsters={filtered}/>
      </div>
    );
  }
}
export default App;
