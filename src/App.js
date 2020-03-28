import React, {Component} from 'react';
import { Cardlist } from './components/Cardlist/Cardlist.component'
import { Searchbox } from './components/Searchbox/Searchbox.component'
import './App.css';

class App extends Component {

  constructor()
  {
    super();

    this.state={
      monster:[],
      searchField:''
    }
  }

componentDidMount()
{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(user => this.setState({monster: user}))
}

  render()
  {
    const {monster,searchField} = this.state
    const filtered=monster.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <Searchbox placeholder="search" handleChange={e => this.setState({searchField: e.target.value})}></Searchbox>
        <Cardlist monster={filtered}></Cardlist>
      </div>
    );
  }
}

export default App;
