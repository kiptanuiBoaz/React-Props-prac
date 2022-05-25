import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";


function Card (props){
  return(
    
    <div>
    {/* 1. Apply CSS styles to App.jsx component */}
    {/* . Use props to render the default Beyonce contact card */}
     
      <div className="card">
        <div className="top">
          {/* <p className="index"> {props.id}</p> */}
          <h2 className="name">{props.name}</h2>
          <Avatar imgURL = {props.imgURL}/>
          
        </div>
        <div className="bottom">
          <Details  
            propName={props.phone}

          />
         <Details 
            propName={props.email}

          />
        </div>
      </div>
    </div>
    
  )

     
}; 

export default Card;
  
