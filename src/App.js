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
    ages : 'The ages of the persons in Class',
    showHide : false
  }
  switchNameHandler = (names) => {
    //console.log(2)
    console.log('Class');
    //console.log(this.state);
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
      ]
    })
  }
  onNameChangeHandler = (e,i)=>{
    if (e === '') {
      alert(`Can't be empty!!!`)
    }else{
      let changePerson = [...this.state.persons];
      let changedPe = changePerson[i]
      changedPe.name = e;
      changePerson[i] = changedPe;
      console.log(changedPe);
      this.setState({persons:changePerson});
    }

    // this.setState({
    //   persons:[
    //   {
    //       name : 'James', 
    //       age : 21
    //   },
    //   {
    //     name : e.target.value,
    //     age : 21
    //   }


    // ]})
  }
  ShowHideUsers = () => {
    //console.log(this.state)
    let isTrue = this.state.showHide
    //console.log(isTrue);
    this.setState({showHide : !isTrue});
  }
  deletePerson = (i) => {
    let person = this.state.persons.slice();
    person.splice(i,1);
    this.setState({persons : person})
  }
  ran = Math.random();

  render(){

    console.log(this.ran);
    if(this.ran > 0.7){
      throw new Error('Something is wrong!!!');
    }
    return (
      
      <div className="App">
        <br />
        <button onClick={this.ShowHideUsers}> Switch Name </button>
        <p>

        </p> 
        {this.state.showHide ?
          <div>
              {
                this.state.persons.map((e,i) => {
                  return(
                    <Person 
                    name={e.name}
                    age={e.age}
                    click={() => this.deletePerson(i)}
                    key = {i}
                    changeUser = {(e) => this.onNameChangeHandler(e,i)}
                    >
                    Just Random Texts
                    </Person>
                  )
                })
              }
          </div> :
          null
        }
        {/* <Person 
        name='martin'
        age='12'
        click = {this.switchNameHandler}
        />
        <Person 
        name= {this.state.persons[1].name}
        age='12'
        changeNameApp = {this.onNameChangeHandler}
        /> 
        <Person name='Luher' age='21'>
          Hello I'm From child Element
        </Person> 
          <br />
        <input type='text' className='TextInput'></input> <br/>
        <br/> 
        */}
      </div>
    );

    //return(React.createElement('div',{className:'App'}, React.createElement('h1',null,'Hi,I\'m From the Create Element')))
  }
}

export default App;
