import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      peoples:[],
      searchfield:''
    }
  }

  // fetch data from swapi
  componentDidMount(){
    fetch('https://swapi.dev/api/people')
    .then(response => response.json())
    .then(data => this.setState({peoples: data.results}));
    //.then(data => console.log(data.results));
    
  }

  // put search text in search form field
  onSearchChange = (event) => {
    // set search field value
    this.setState({ searchfield: event.target.value})
}

  render(){

    // destructure
    const { peoples, searchfield } = this.state;

    // return search result array
    const filteredPeoples = peoples.filter(people =>{
        return people.name.toLowerCase()
        .includes(searchfield.toLocaleLowerCase());
        //return people.name.toLowerCase().includes(searchfield.toLowerCase());
        //return people.name.includes(searchfield);
    })  
  
    return !peoples.length ? 
    <h1>Loading</h1>:
    (
      <div>
        <h1>STARWARS APP</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList peoples={filteredPeoples}/>
      </div>
    );
  }
  

}




export default App;
