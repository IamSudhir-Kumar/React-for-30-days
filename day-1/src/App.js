import React, { useState } from 'react';
import './App.css';

const App = () => {
let date = new Date().toLocaleDateString();
let time = new Date().toLocaleTimeString();

const [ctime, setCtime] = useState(time); //S

const UpdateTime = () => {
  time = new Date().toLocaleTimeString();
  setCtime(time);
};

setInterval(UpdateTime,1000)
  return (
    <div>
    <h1>
      Date : - {date} <br/>
    </h1>
    <h2>
      Time : - {ctime} <br/>
      
    </h2>
    </div>
  )
}


export default App;
