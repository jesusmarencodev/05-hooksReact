//Este es el reducer, esta en un archivo aparte


export const todoReducer = (state = [], action) => {

    switch (action.type) {
         case 'add':
            return [...state, action.payload]
        case 'delete':
            return state.filter(todo => todo.id !== action.payload);
        case 'toggle':
            return state.map( todo =>
                (todo.id === action.payload) //condicion
                    ? {...todo, done : !todo.done}
                    : todo
            );
        case 'toggleOld':
            return state.map( todo => {
                console.log(todo)
                if(todo.id === action.payload){
                    return {
                        ...todo,
                        done : !todo.done
                    }
                }else{
                    return todo
                }
            })   
        default:
            return state;
    }


    return state;
}