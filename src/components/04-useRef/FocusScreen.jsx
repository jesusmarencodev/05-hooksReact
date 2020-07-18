import React, { useRef } from 'react'

export const FocusScreen = () => {


    const inputRef = useRef()

    const handleClick = () => {
        inputRef.current.select();
        console.log(inputRef)
    }
    

    return (
        <div className='container'>
            <h1>FocusScreen</h1>
            <hr/>
            <input
                ref={inputRef}
                className='form-control mb-5'
                type='text'
                placeholder='ingresa tu nombre'
            />
            <button className='btn btn-outline-primary' onClick={handleClick} >Focus</button>
        </div>
    )
}
