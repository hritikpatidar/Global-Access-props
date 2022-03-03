import React, { createContext, useContext, useState } from 'react'
import { StudentContext } from './StudentContext';


const FriendContext = createContext()

export default function Component1() {

    const [name, setName] = useState("ritik");
    return (
      <>
        <FriendContext.Provider value={name}>
          <div>Component1</div>
          <Component2 />
        </FriendContext.Provider>
        
      </>
      
    )
}

//rfc
function Component2(){

    const xyz = useContext(FriendContext);

    const abc = useContext(StudentContext );
    //3. return statement
    return(
      <>
        <div>Component2 {xyz} {console.log(abc)}</div>
        {
            abc.map(function(currentValue,index,arr){
                return <h1 key={index}>{currentValue.name}</h1>
            })
        }
      </>
    )
}
