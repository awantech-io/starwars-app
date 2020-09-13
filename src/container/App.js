import React, {Component} from 'react';
import './App.css';
import CardList from '../components/CardList';


class App extends Component {

  constructor(){
    super();
    this.state = {
      peoples:[]
    }
  }

  // fetch data from swapi
  componentDidMount(){
    fetch('https://swapi.dev/api/people')
    .then(response => response.json())
    .then(data => this.setState({peoples: data.results}));
    //.then(data => console.log(data.results));
    
  }

  render(){

    // destructure
    const { peoples } = this.state;
  
    return (
      <div>
        <h1>STARWARS APP</h1>
        <CardList peoples={peoples}/>
      </div>
    );
  }
  

}




export default App;
