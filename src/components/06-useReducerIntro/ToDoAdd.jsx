import React from "react";
import { useForm } from "../../hooks/useForm";

export const ToDoAdd = ({handleAddTodo}) => {
    const [ {descripcion}, handleInputChange, reset ] = useForm({
        descripcion:'',
    });


    const handleSubmit = (e) => {
        e.preventDefault();

        if(descripcion.trim().length <= 1 ) return;

        const newTodo = {
            id : new Date().getTime(),
            desc : descripcion,
            done : false
        };

        handleAddTodo(newTodo)
        reset();
    }

    return (
        <>
        <h4>Agregar TODO</h4>
        <hr />
        <form onSubmit={handleSubmit}>
            <input
            className="form-control"
            type="text"
            name="descripcion"
            placeholder="Aprender ..."
            autoComplete="off"
            value={descripcion}
            onChange={handleInputChange}
            />
            <button
            className="btn btn-outline-primary btn-block mt-3"
            type="submit"
            >
            Add Todo
            </button>
        </form>
        </>
    );
};
