import React, {useReducer} from 'react'
//import {initialState, reducer} from '../reducers/todoReducer'

export const ListItem = props => {

    return (
    <div onClick={() => {
        props.dispatch({type: 'TOGGLE_COMPLETED', payload: props.todo.id})
        console.log('toggle click', props.todo)
    }}>
        <p style={{ textDecoration: props.todo.completed ? 'line-through' : 'none' }}>{props.todo.item}</p>
    </div>
    
    )
}