import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-useFetch/MultipleCustomHooks'

export const RealExampleRef = () => {

    const [show, setShow] = useState(false)

    return (
        <div className='container'>
            <h1>RealExampleRef</h1>
            <hr/>

            {show && <MultipleCustomHooks/>}
            <button 
                className='btn btn-primary my-5'
                onClick={()=> setShow(!show)}
            >Show/Hide</button>
        </div>
    )
}
