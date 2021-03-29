import React,{ useState } from "react";



const Person = (props) => {
    const[stateArr, setSateArr] = useState({
        persons:[
            {name : 'Ma',age : 21}
        ]
        //,otherState : 'This state is not effected by Hooks'
    });
    //const [otherState, setOtherState] = useState('This state is not effected by Hooks')
    const changeName = () =>{
        console.log(stateArr);
        //console.log(otherState)
        console.log('object')
        setSateArr({
            persons:[
                {name:'Lollu'}
            ]
            //,otherState : stateArr.otherState + "Updatde "
        })
    }
    return(
        <div className='person'>
            Hello.
            <br />
            My Name is {props.name}
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
                    <input type='text' onChange= {props.changeNameApp}/>
            <p onClick={()=> props.click('Jam')}>____</p>
        </div>

    );
}
export default Person;