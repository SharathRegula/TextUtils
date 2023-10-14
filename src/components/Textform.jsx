import React from 'react';
import { useState } from "react";

export default function Textform(props) {
  const [text,settext]=useState("");
function Onchangehandler(e){
  settext(event.target.value)
}
function OnclickhandlerUpper(){
settext(text.toUpperCase())
}
function OnclickhandlerLower(){
settext(text.toLowerCase())
}
  return (
<>
      <div className='container'>
      <textarea value={text} onChange={Onchangehandler} className="form-control my-2 border-dark" style={{backgroundColor:props.mode==='black'?'#dbe7e9':'white'}}  rows="8"></textarea>
      <button type="button" onClick={OnclickhandlerUpper}
        className="btn btn-primary  mx-2">Covert to UpperCase</button>
        <button type="button" onClick={OnclickhandlerLower}
        className="btn btn-primary  mx-2">Covert to LowerCase</button>
<h3 className='my-1' style={{color:props.mode==='black'?'white':'black'}} >Preview</h3>
      <p style={{color:props.mode==='black'?'white':'black'}}>{text}</p>
        <p style={{color:props.mode==='black'?'white':'black'}}>Readable in {((text.split(' ')).length-1)*0.02} minutes</p>
        <p style={{color:props.mode==='black'?'white':'black'}}>No of Words {(text.split(' ')).length-1} Words</p> 
           </div>
</>    
  )
    }