import { useState } from 'react'
import './App.css'

function App() {
  // const [fuckers, setFuckers] = useState("rajjo")
  // const [gio , setgio] = useState(0)
  const [state , setState] = useState({
    fuckers : "rossa",
    gioadd : 1
  })

  function gioadd(){
    
  }
  function changefuck() {
    setFuckers({
      ...state,
      fuckers : "rajjo"
    })
  }
  return (
    <>
      <h1 onClick={changefuck}>Day 15 {state.fuckers} on <p style={{ cursor: 'pointer' }} onClick={gioadd}>{gio}</p></h1>
    </>
  )
}

export default App
