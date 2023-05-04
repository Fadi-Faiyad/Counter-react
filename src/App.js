
import './App.css';
import React, { useState } from 'react'


function App() {
let [counterNum, setCounterNum ] = useState(0)
window.setCounterNum = setCounterNum


  return (
    <div className="App">
      <header className="App-header">
       
        <p>
          { counterNum }
        </p>
      <button onClick={() => setCounterNum(counterNum + 1)} className='add-num'>Add</button>
      <button onClick={() => setCounterNum(counterNum - 1)} className='subtract-num'>subtract</button>
      </header>
    </div>
  );
}

export default App;
