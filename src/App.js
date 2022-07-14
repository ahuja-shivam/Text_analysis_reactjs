import { useState } from 'react';
import './App.css';
import Forms from './components/Forms';
import Navbarbs from './components/Navbarbs';

function App() {
  const  [Mode, setMode] = useState('light');
  const toggleMode = () =>{
    if(Mode === "dark"){
      setMode("light");
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'rgb(38, 38, 38)';  

    }
    else{
      setMode("dark");
      document.body.style.backgroundColor = 'rgb(38, 38, 38)';
      document.body.style.color = 'white'; 
    }
  }
  
  return (
    <div>
    <Navbarbs home='Home' about='About' mode = {Mode} toggleMode = {toggleMode}/>
    <div className="container">
    <Forms heading = "Enter the text here" mode = {Mode}/>
    </div>  
    </div>
  )
}

export default App;
