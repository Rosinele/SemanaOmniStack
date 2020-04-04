import React, {useState} from 'react';

export default function Header({children}){
    const [counter, setCounter]= useState(0);

    function increment(){
        setCounter(counter + 1);
    }

    return(
        <div>
            <header>Contador:{counter}</header>
            <button onClick={increment}>Incrementar</button>
        </div>
        
    )
}

//export default Header, pode substituir o default lá em cima