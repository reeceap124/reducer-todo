import React, {useState} from 'react';
import './App.css';



import { ItemCreator } from './components/ItemCreator';
import { TodoList } from './components/TodoList';

function App() {

  
  
  const [text, setText] = useState('')
  
  

  const handleChange = (e) => {
    setText(e.target.value)
  }
  

  return (
    <div className="App">
      <ItemCreator handleChange={handleChange} text={text} setText={setText}/>
      {/* <TodoList/> */}
      
    </div>
  );
}

export default App;
