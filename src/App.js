import React, { useState } from 'react';
import Person from './Person/Person';

import './App.css';

const App = () => {
    const [state, setState] = useState({
        persons: [
          { name: 'Max ', age: 28},
          { name: 'Cam', age: 26},
          { name: 'Kaylyn', age: 21}
        ]
      })

      const switchNameHandler = () => {
          //console.log('was clicked')
          setState({persons : [
            { name: 'Maxi ', age: 8},
            { name: 'Cami', age: 6},
            { name: 'Kay', age: 1}
          ]})
        }

    return (
      <div className="App">
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={state.persons[0].name} age={state.persons[0].age}/>
        <Person name={state.persons[1].name} age={state.persons[1].age} >Hobbies: Coding</Person>
        <Person name={state.persons[2].name} age={state.persons[2].age}/>
      </div>
    );
}

export default App;

// state = {
//   persons: [
//     { name: 'Max ', age: 28},
//     { name: 'Cam', age: 26},
//     { name: 'Kaylyn', age: 21}
//   ]
// }
// switchNameHandler = () => {
//   //console.log('was clicked')
//   this.setState({persons : [
//     { name: 'Maxi ', age: 8},
//     { name: 'Cami', age: 6},
//     { name: 'Kay', age: 1}
//   ]})
// }