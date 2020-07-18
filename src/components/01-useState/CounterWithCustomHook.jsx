import React from 'react';
import './counter.css';
import { useCounter } from '../../hooks/useCounter';

export const CounterWithCustomHook = () => {

    const  {state : counter, increment, decrement, reset} = useCounter();




    return (
        <>
            <h1>Counter With Hook  { counter } </h1>
            <button onClick={ ()=> increment(2)} className = 'btn btn-primary mr-5'> +1 </button>
            <button onClick={ ()=> decrement(2)} className = 'btn btn-danger'> -1 </button>
            <button onClick={ ()=> reset()} className = 'btn btn-success ml-5'> reset </button>
        </>
    )
}
