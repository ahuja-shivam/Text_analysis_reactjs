import './App.css';
import Forms from './components/Forms';
import Navbarbs from './components/Navbarbs';


function App() {
  return (
    <>
    <Navbarbs home='Home' about='About'/>
    <div className="container">
    <Forms heading = "Enter the text here"/>
    </div>  
    </>
  )
}

export default App;
