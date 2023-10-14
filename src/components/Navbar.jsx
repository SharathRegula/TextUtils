import React from 'react'

export default function Navbar(props) {

  
  return (
    <div className="border border-black" style={{backgroundColor:props.mode}}> 
      {/* {console.log(props.mode)} */}
 <nav className="navbar navbar-expand-lg ">
  <div className="flex m-auto container-fluid">
    <a className="navbar-brand" href="#"><strong style={{color:props.mode==='black'?'white':'black'}} >{props.name}</strong></a>
    <div className="collapse m-auto navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav m-auto mb-lg-0">
    <div className="btn-group btn-group-sm" role="group" aria-label="Basic radio toggle button group">
  <input type="radio" className="btn-check" onClick={props.togglemode} value='blue' name="btnradio" id="btnradio1" autoComplete="off"/>
  <label className="btn btn-outline-secondary" htmlFor="btnradio1"> Grey</label>


      
  <input type="radio" className="btn-check" onClick={props.togglemode} value='green' name="btnradio" id="btnradio2" autoComplete="off"/>
  <label className="btn btn-outline-success" htmlFor="btnradio2"> Green</label>

  <input type="radio" className="btn-check" onClick={props.togglemode} value='dark' name="btnradio" id="btnradio3" autoComplete="off"/>
  <label className="btn btn-outline-dark" htmlFor="btnradio3">Dark</label>
</div>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-dark" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
