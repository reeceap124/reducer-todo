import React, {useState} from 'react';
import './App.css';



import { ItemCreator } from './components/ItemCreator';


function App() {

  const [text, setText] = useState('')
  
  const handleChange = (e) => {
    setText(e.target.value)
  }
  return (
    <div className="App">
      <ItemCreator handleChange={handleChange} text={text} setText={setText}/>
    </div>
  );
}

export default App;
