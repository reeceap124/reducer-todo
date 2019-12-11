import React, {useReducer} from 'react'
import {initialState, reducer} from '../reducers/todoReducer'


export const ItemCreator = (props) => {

    const [textState, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <form>
                <input type='text' name='todo' onChange={props.handleChange} value={props.text}/>
                <button onClick={(e)=>{
                    e.preventDefault()
                    dispatch({type: 'ADD_TODO', payload: props.text})
                    console.log('clicked', textState)
                }}>Add</button>
            </form>
            <p>{textState.items[0].item}</p>
        </div>
        
    )
}