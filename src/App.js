import React, { Component } from "react";
import './App.css';
import  Person from './Person/Person';


class App extends Component {
  
  state = {
    persons : [
      {
        name : 'max',
        age : 21
      },
      {
        name : 'inputTesting',
        age : 23
      },
      {
        name : 'Jade',
        age : 25
      }
    ],
    ages : 'The ages of the persons in Class'
  }
  switchNameHandler = (names) => {
    //console.log(2)
    console.log('Class');
    console.log(this.state);
      this.setState({persons: [
        {
          name : names,
          age : 29
        },
        // {
        // name : 'Jade',
        // age : 25
        // },
        {
          name : 'James',
          age : 21
        },
        {
        name : 'Jade',
        age : 25
      }
      ]})
  }
  onNameChangeHandler = (e)=>{
    this.setState({
      persons:[
      {
          name : 'James',
          age : 21
      },
      {
        name : e.target.value,
        age : 21
      }


    ]})
  }
  render(){
    
    return (
      <div className="App">
        {/* {
          this.state.persons.map(e => {
            return(
              <Person name={e.name} age={e.age}>Just Random Texts</Person>
            )
          })
        } */}
        <Person 
        name='martin'
        age='12'
        click = {this.switchNameHandler}
        />
        <Person 
        name= {this.state.persons[1].name}
        age='12'
        changeNameApp = {this.onNameChangeHandler}
        />
        {/* <Person name='Luher' age='21'>
          Hello I'm From child Element
        </Person> */}
        {/* <br />
        <input type='text' className='TextInput'></input> <br/>
        <br/> */}
        <button onClick={this.switchNameHandler.bind(this,'Sans')}> Switch Name </button>
      </div>
    );

    //return(React.createElement('div',{className:'App'}, React.createElement('h1',null,'Hi,I\'m From the Create Element')))
  }
}

export default App;
