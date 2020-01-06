import React, { Component } from 'react';
import Person from './Person/Person';

import './App.css';

class App extends Component {
    state = {
        persons: [
          { id: 0, name: 'Max', age: 28},
          { id: 1, name: 'Cam', age: 26},
          { id: 2, name: 'Kaylyn', age: 21}
        ],
        showPersons: true
    };
      deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.slice(personIndex, 1)
        this.setState({persons: persons})
      }
        
      nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => p.id === id)
        console.log(personIndex)
        const person = {...this.state.persons[personIndex]};

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person

        this.setState( {persons: persons} )
      }

      toggleHandler = () => {
        let toggle = this.state.showPersons;
        this.setState({ showPersons: !toggle})
      }

    render() {
      const styles = {
        background: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
      }


      let persons = null;

      if (this.state.showPersons) {
        persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return <Person 
              name={person.name} 
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)}
              />
            })}
          </div>
        ) 
      }

      return (
        <div className="App">
          <button style={styles} onClick={this.toggleHandler}>Show/Hide</button>
          {persons}
        </div>
      );
    }
}

export default App;

