import React from 'react'

export const ShowIncrement = React.memo(({increment}) => {

    console.log('Se genero volvio a generar el componente hijo ShowIncrement :(')
    return (
        <button
            className='btn btn-success'
            onClick={increment}
        >
            Incremento
        </button>
    )
}
)