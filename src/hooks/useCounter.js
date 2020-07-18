import { useState } from "react";

export const useCounter = (initiaState = 10) => {
    const [state, setstate] = useState(initiaState);


    const increment = (factor = 2) => {
        setstate(state + factor);
    }

    const decrement = (factor = 2) => {
        setstate(state - factor);
    }

    const reset = () => {
        setstate(initiaState);
    }


    return {
        state,
        increment,
        decrement,
        reset
    }
}