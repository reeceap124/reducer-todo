import React from 'react'
import {ListItem} from './ListItem'


export const TodoList = props => {
    return (
        <div>
            {props.textState.items.map((val, index)=> (
                <ListItem key={index} todo={val}/>
            ))}
        </div>
    )
}