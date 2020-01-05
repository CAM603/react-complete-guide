import React, { Component } from 'react';
import Person from './Person/Person';

import './App.css';

class App extends Component {
    state = {
        persons: [
          { name: 'Max', age: 28},
          { name: 'Cam', age: 26},
          { name: 'Kaylyn', age: 21}
        ]
    };

      switchNameHandler = (newName) => {
          //console.log('was clicked')
          this.setState({
            persons : [
              { name: newName, age: 8},
              { name: 'Cami', age: 6},
              { name: 'Kay', age: 1}
          ]})
      }
        
      nameChangeHandler = (event) => {
          
        this.setState({
          persons : [
            { name: event.target.value, age: 8},
            { name: 'Cami', age: 6},
            { name: 'Kay', age: 1}
        ]})
      }

    render() {
      const styles = {
        background: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'

      }
      return (
        <div className="App">
          <button style={styles} onClick={() => this.switchNameHandler('Maxi')}>Switch Name</button>
          <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Maximilian')}
          changed={this.nameChangeHandler}
          />
          <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} >Hobbies: Coding</Person>
          <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
        </div>
      );
    }
}

export default App;

