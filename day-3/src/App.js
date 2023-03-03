import React,{useState} from 'react';
import './App.css';

function App() {
  const [value , setValue] = useState("")
  //1Mfp9t4N8ZPl6vH08tGZgUlVGZjfNvQIAfUdi5MZp_Y
  const fetchImages = ()=>{
    fetch('https://api.unsplash.com/search/photos/?client_id="1Mfp9t4N8ZPl6vH08tGZgUlVGZjfNvQIAfUdi5MZp_Y&query=${value}')
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
    })
  }
    return (
    <div className="App">
      <div className="mydiv">
        <span> Search </span>
        <input 
        style={{width:"60%"}}
        type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
        <button onClick={()=>fetchImages()}>Send</button>
      </div>
    </div>
  );
}

export default App;
