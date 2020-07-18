import React from 'react'

export const Small = React.memo(({counter}) => {

    console.log('Small se esta mostrando')
    return (
        <small>
            {counter}
        </small>
    )
}
)