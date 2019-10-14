import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';

class App extends Component {
    //constructor created to initialize the state of the robots
    constructor(){
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    } 

    //This section is to fetch users from jsonplaceholder using their Api
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>response.json())
            .then(users=>this.setState({robots: users}));
    }

    //This section target the entered value for search 
    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value }) 
    }

    //This section initialize and compare the search value with the result fetched from the source
    render() {
        const {robots, searchField } = this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })


    //This section is a test condition that checks if the robots details fetchedC is completely ready
    return !robots.length ?
        <h1>Loading</h1>:
    (
            <div className='tc'>
                <h1 className='f1'>Robo Friends</h1>
                <a href="https://github.com/Olanetsoft/RoboFriendsApp"><h2 id="head">View on github.com/Olanetsoft/RoboFriendsApp</h2></a>
                
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll> 
            </div>
    );
    }
}
export default App;  