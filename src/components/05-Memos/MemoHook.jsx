import React, { useState, useMemo } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { procesoPesado } from '../helpers/procesoPesado';


export const MemoHook = () => {
    const {counter, increment} = useCounter(5000);

    const [show, setShow] = useState(true);




    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

    return (
        <div className='container'>
            <h1>MemoHook</h1>
            <h2>Counter <small>{counter}</small> </h2>
            <hr/>
            <p>{memoProcesoPesado}</p>
            <button onClick={increment} className='btn btn-primary my-5 mx-5'>+1</button>
            <button onClick={()=> setShow(!show)} className='btn btn-warning'>Show/Hide { JSON.stringify( show ) }</button>
        </div>
    )
}
