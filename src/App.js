import React, {useState} from 'react';
import './App.css';

//import {initialState, reducer} from './reducers/todoReducer'

import { ItemCreator } from './components/ItemCreator';
//import { TodoList } from './components/TodoList';

function App() {

  // const [textState, dispatch] = useReducer(reducer, initialState)
  
  const [text, setText] = useState('') 
  // const [list, setList] = useState([])set a case in reducer

  const handleChange = (e) => {
    setText(e.target.value)
  }
  

  return (
    <div className="App">
      <ItemCreator handleChange={handleChange} text={text}/>
      {/* <TodoList/> */}
      
    </div>
  );
}

export default App;
