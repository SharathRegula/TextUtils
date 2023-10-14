import './App.css'
import Navbar from './components/Navbar'
import Alert from './components/Alert'
import Textform from './components/Textform'
import { useState } from "react";

export default function App() {
const [mode,setmode]=useState('white');
const [alertstate,setalertstate]=useState(null);
const showalert=(message,type)=>{
setalertstate({
  msge:message,
  type:type
})
  setTimeout(()=>{setalertstate(null)},1500)
}  
const togglemode=(e)=>{
    if(e.target.value==='dark'){
      setmode('black');
      document.body.style.backgroundColor='black';
      showalert("Dark Mode is enabled");
    }
    else if(e.target.value==='blue')
      {
      setmode('#dbe7e9')
      document.body.style.backgroundColor='#dbe7e9'; 
        showalert("Light Mode is enabled");
    }
      else if(e.target.value==='green')
      {
      setmode('#3fc51e')
        document.body.style.backgroundColor='#3fc51e';
    }
    else{
      setmode('white')
      document.body.style.backgroundColor='white'
    }
  }
  return (
    <>
    <Navbar mode={mode} name="TextManager" togglemode={togglemode}/>
      <Alert alertstate={alertstate} desc="  This is an alert"/>
<Textform mode={mode} />
    </>
  )
}
