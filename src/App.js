import React,{useState} from 'react';
import './App.css';
import Forms from './components/Forms';
import Navbarbs from './components/Navbarbs';
import Teams from './components/Teams';
import Alerts from './components/Alerts';
import { BrowserRouter,Routes, Route } from "react-router-dom";

function App() {
  const  [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const toggleMode = () =>{
    if(Mode === "dark"){
      setMode("light");
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'rgb(38, 38, 38)';
      showAlert("Light Mode is unabled", "success");  

    }
    else{
      setMode("dark");
      document.body.style.backgroundColor = 'rgb(38, 38, 38)';
      document.body.style.color = 'white'; 
      showAlert("Dark Mode is unabled", "success");      
    }
  }
  
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <div>
      <BrowserRouter>
        <Navbarbs home='Home' about='About' mode = {Mode} toggleMode = {toggleMode}/>
        <Alerts alert = {alert}/> 
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Forms heading = "Enter the text here" mode = {Mode}/>}></Route>
            <Route exact path="/teams" element={<Teams/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;