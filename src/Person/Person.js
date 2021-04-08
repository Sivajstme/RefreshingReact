import React,{ useState } from "react";
import './Person.css'
import ErrorBoundary from "../ErrorBoundry/ErrorBoundry";

const Person = (props) => {
    const[stateArr, setSateArr] = useState({
        persons:[
            {name : 'Ma',age : 21}
        ]
        //,otherState : 'This state is not effected by Hooks'
    });
    const [toChange, changed] = useState(false);
    const [inputName, changedInputName] = useState('');
    const isChange = () =>{
        console.log('object')
        console.log(toChange);
        let change = toChange;
        changed({toChange : !change});
        console.log(toChange);
    }

    //const [otherState, setOtherState] = useState('This state is not effected by Hooks')
    const changeName = () =>{
        //console.log(stateArr);
        //console.log(otherState)
        setSateArr({
            persons:[
                {name:'Lollu'}
            ]
            //,otherState : stateArr.otherState + "Updatde "
        })
    }
    const inputedName = (e) => {
        //console.log(props);
        changedInputName(e.target.value);

    }
    const sendUserUpdate = (i) =>{
        changed({toChange : !toChange});
        props.changeUser(i);
    }

    return(
        <div className='person'>
            <ErrorBoundary>
            <span className='delete' onClick={props.click}>X</span>
            <br />
            Hello.
            <br />
            My Name is {props.name}<br/> 
            <button onClick={isChange}> Change Name</button>
            { toChange ?
                <>
                <input type='text' onChange={inputedName}></input>
                <button onClick= {() => sendUserUpdate(inputName)}> Update User</button>
                </>
                :null

            }
            {
                props.name === 'James'  ? 
                (<> 
                    My Name is Written from StateArr : - {stateArr.persons[0].name} 
                    <br></br>
                    {props.children}
                    <br />
                    <button onClick={changeName}>ClickMe</button>
                </>
                ): 
                (<>

                </>
                )
                
            }
            <br />
            My Age is {parseInt(props.age) 
                //    * Math.floor(Math.random() * 10)
                        }
                        
                    <br />
                    {/* <input type='text' onChange= {props.changeNameApp}/> 
            <p onClick={()=> props.click('Jam')}>____</p>*/}
            </ErrorBoundary>
        </div>

    );
}
export default Person;