const initialState = [{
    id : 1,
    todo : 'Comprar pan',
    donde : false
}];


const todoReducer = (state = initialState, action) => {
    if(action?.type === 'agregar' ){
        return [...state, action.payload]
    }

    return state;
}

let todos = todoReducer();


const newTodo = {
    id : 2,
    todo : 'Comprar leche',
    donde : false
}

const action = {
    type : 'agregar',
    payload : newTodo
}

//se envia el estado anterior seguido de la accion
todos = todoReducer( todos, action );

console.log(todos)