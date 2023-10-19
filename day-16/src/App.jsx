import './App.css'
import EditTextArea from './component/EditTextArea'
import Navbar from './component/Navbar'
import VideoBackground from './component/VideoBackground'

function App() {

  return (
    <>
      <Navbar fixed/>
      < VideoBackground />
      <EditTextArea title="Type your Message"/>
    </>
  )
}

export default App
