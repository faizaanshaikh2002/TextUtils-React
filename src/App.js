// import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [modeState, setModeState] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (modeState === "light") {
      setModeState('dark')
      document.body.style.backgroundColor = 'rgb(37, 40, 44)'
      document.body.style.color = 'white'
      showAlert("Dark Mode has been enabled", "success")
    } else {
      setModeState('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("Light Mode has been enabled", "success")
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={modeState} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container my-3'>
        <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text below to analyze" mode={modeState} />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
