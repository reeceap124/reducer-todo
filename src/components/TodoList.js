import React from 'react'
import {ListItem} from './ListItem'

export const TodoList = props => {
    return (
        <div>
            {props.list.map((val, index)=> (
                <ListItem key={index} item={val}/>
            ))}
        </div>
    )
}