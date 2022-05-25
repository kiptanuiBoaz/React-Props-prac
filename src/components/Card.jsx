import React from "react";
import Avatar from "./Avatar";


function Card (props){
  return(
    
    <div>
    {/* 1. Apply CSS styles to App.jsx component */}
    {/* . Use props to render the default Beyonce contact card */}
     
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Avatar imgURL = {props.imgURL}/>
          
        </div>
        <div className="bottom">
          <p className="info">{props.phone}</p>
          <p className="info">{props.email}</p>
        </div>
      </div>
    </div>
    
  )

     
}; 

export default Card;
  
