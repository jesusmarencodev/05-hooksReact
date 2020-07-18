import React, { useState, useCallback } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);


    const increment = useCallback(
        () => {
            setCounter(c => c + 1 );
        },
        [setCounter],
    )


    return (
        <div className='container'>
            <h1>CallbackHook:  {counter}</h1>
            <hr/>

            <ShowIncrement increment={increment}/>
            
        </div>
    )
}
