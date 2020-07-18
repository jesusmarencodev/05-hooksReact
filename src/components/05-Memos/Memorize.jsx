import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small';

export const Memorize = () => {

    const {counter, increment} = useCounter();

    const [show, setShow] = useState(true)

    return (
        <div className='container'>
            <h1>Memorize <Small counter={counter} /> </h1>
            <hr/>
            <button onClick={increment} className='btn btn-primary my-5 mx-5'>+1</button>
            <button onClick={()=> setShow(!show)} className='btn btn-warning'>Show/Hide { JSON.stringify( show ) }</button>
        </div>
    )
}
