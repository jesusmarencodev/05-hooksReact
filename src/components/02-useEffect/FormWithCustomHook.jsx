import React from 'react';
import './effects.css';
import { useForm } from '../../hooks/useForm';


export const FormWithCustomHook = () => {

    const [values, handleInputChange] = useForm({
        name : '',
        email : '',
        password : ''
    })

    const  { name , email, password } = values; 

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(values)
    }


    return (
        <form className = 'container' onSubmit={handleSubmit}>
            <h1>FormWithCustomHook</h1>
            <hr/>

            <div className = 'form-group'>
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
            <div className = 'form-group'>
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
            <div className = 'form-group'>
                <input
                    type = 'text'
                    name = 'password'
                    className = 'form-control'
                    placeholder = '*******'
                    autoComplete = 'off'
                    value = {password}
                    onChange = {handleInputChange}
                />
            </div>
            <input type='submit'  value = 'Submit' className = 'btn btn-success mt-4' />
        </form>
    )
}
