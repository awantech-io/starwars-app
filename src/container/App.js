import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
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
    })  
  
    return !peoples.length ? 
    <h1>Loading</h1>:
    (
      <div className='tc'>
        <img alt='starwars-logo' src='https://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG34.png' width="250" height="250"/>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
        <CardList peoples={filteredPeoples}/>
        </Scroll>
      </div>
    );
  }
  

}




export default App;
