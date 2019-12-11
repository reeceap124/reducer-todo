import React, {useReducer} from 'react'
import {initialState, reducer} from '../reducers/todoReducer'
import { TodoList } from './TodoList'


export const ItemCreator = (props) => {

    const [textState, dispatch] = useReducer(reducer, initialState)
    
    return (
        <div>
            <form>
                <input type='text' name='todo' onChange={props.handleChange} value={props.text}/>
                <button onClick={(e)=>{
                    e.preventDefault()
                    dispatch({type: 'ADD_TODO', payload: props.text})
                    
                    console.log(textState)
                    props.setText('')
                }}>Add</button>
                <button onClick={(e)=>{
                    e.preventDefault();
                    dispatch({type: 'REMOVE_COMPLETED'})
                }}>Remove Completed</button>
            </form>
            <p>{textState.items[0].item}</p>
            <TodoList textState={textState} dispatch={dispatch}/>
        </div>
        
    )
}