import React, { useState } from 'react';
import './App.css';

const App = () => {
let date = new Date().toLocaleDateString();
let time = new Date().toLocaleTimeString();

const [ctime, setCtime] = useState(time);
  return (
    <div>
    <h1>
      Date : - {date} <br/>
      Time : - {ctime}
    </h1>
    </div>
  )
}


export default App;
