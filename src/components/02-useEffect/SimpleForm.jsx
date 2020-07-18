import React, { useEffect, useState } from 'react';
import './effects.css';
import { Message } from './Message.jsx';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name : '',
        email : ''
    })

    const  { name , email } = formState;

/************************************************************ 

                            PARTE 1

     useEffect(() => {
        console.log('hey')
    },[])

    useEffect(() => {
        console.log('cambio el form')
    },[formState])

    //solo cuando el email cambia
    useEffect(() => {
        console.log('cambio el email')
    },[email]) */

/************************************************************* */    


    useEffect(() => {
        /* console.log('hey') */
    },[])

    useEffect(() => {
        /* console.log('cambio el form') */
    },[formState])

    //solo cuando el email cambia
    useEffect(() => {
        /* console.log('cambio el email') */
    },[email]) 


    const handleInputChange = (e) => {

        setFormState({
            ...formState,
            [e.target.name]  : e.target.value
        })
    }

    return (
        <div className = 'container'>
            <h1>useEffec</h1>
            <hr/>

            <div className = 'dorm-group'>
                <input
                    type = 'text'
                    name = 'name'
                    className = 'form-control'
                    placeholder = 'Tu nombre'
                    autoComplete = 'off'
                    value = {name}
                    onChange = {handleInputChange}
                />
            </div>
            <div className = 'dorm-group'>
                <input
                    type = 'text'
                    name = 'email'
                    className = 'form-control'
                    placeholder = 'Tu Email'
                    autoComplete = 'off'
                    value = {email}
                    onChange = {handleInputChange}
                />
            </div>

            {
                (name === '123') && <Message/>
            }
        </div>
    )
}
