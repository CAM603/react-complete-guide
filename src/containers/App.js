import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
import Person from '../components/Persons/Person/Person';
import ValidationComponent from '../components/ValidationComponent';
import CharComponent from '../components/CharComponent';

import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
    state = {
        persons: [
          { id: 0, name: 'Max', age: 28},
          { id: 1, name: 'Cam', age: 26},
          { id: 2, name: 'Kaylyn', age: 21}
        ],
        showPersons: true,
        userInput: ''
    };
      deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1)
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

      inputChangeHandler = (event) => {
        
        this.setState({userInput: event.target.value})
      }

    render() {
      
      let persons = null;

      if (this.state.showPersons) {
        persons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
            />
      }
      const deleteLetter = (index) => {
        const text = this.state.userInput.split('');
        text.slice(index, 1);
        const newText = text.join('')
        this.setState({userInput: newText})
      }

      const charList = this.state.userInput.split('').map((letter, index) => {
        return <CharComponent 
                key={index} letter={letter} 
                clicked={() => deleteLetter(index)}/>
      });

      return (
        <StyleRoot>
          <div className="App">
            <Cockpit 
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.toggleHandler}
            />
            {persons}
            <label>Enter Text</label>
            <input 
            type="text"
            value={this.state.userInput}
            onChange={this.inputChangeHandler}
            />
            <p>{this.state.userInput}</p>
            <ValidationComponent
            inputLength={this.state.userInput.length}
            />
            {charList}
          </div>
        </StyleRoot>
      );
    }
}

export default Radium(App);

