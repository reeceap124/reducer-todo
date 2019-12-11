import React from 'react'
import {ListItem} from './ListItem'


export const TodoList = props => {
    return (
        <div>
            {props.textState.items.map((val)=> (
                <ListItem key={val.id} todo={val} dispatch={props.dispatch}/>
            ))}
        </div>
    )
}