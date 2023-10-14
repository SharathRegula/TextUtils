import React from 'react'

export default function Alert(props) {
  return (
props.alertstate && <div className="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>{props.alertstate.msge}</strong>
</div>
    
  )}