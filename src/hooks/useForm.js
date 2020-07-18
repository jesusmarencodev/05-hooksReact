import { useState, useEffect } from 'react';


export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);

    const { email } = values;

    const handleInputChange = ({target}) => { //hacemos destructurin del evento que viene como e

        setValues({
            ...values,
            [target.name]  : target.value
        })
    }


    useEffect(() => {
        console.log('el email cambio')
    }, [email])


    return [values, handleInputChange]


}