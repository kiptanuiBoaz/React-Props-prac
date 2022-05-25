import React from "react";
import contacts from "./contacts";
import Card from "./Card";
import Avatar from "./Avatar";

function creatCard(contacts){
    return(
        <Card
            // each child in a list should have a unique key property
            // key always has to be "key" in react can be string or number
            // used to ensure things are rendered in the correct order
            id={contacts.id}
            key={contacts.id}
            name={contacts.name}
            imgURL={contacts.imgURL}
            phone= {contacts.phone}
            email= {contacts.email}
        />
    )
};

function App(){
    return(
        <div>
            <h1 className="heading">My Contacts</h1>
            <Avatar
                imgURL="https://lh3.googleusercontent.com/a-/AOh14GgUv_yat73cCyMPwCVyhf9Ju-qFc2W0rKrf9yfdhQ=w60-h60"
            />
            {/* tap into the contacts js object and match it with the props of app */}
            {/* call the map function */}
            {/*  ?*loops through all the elements of contacts array and replicatees the html element Card for each */}
            {contacts.map(creatCard)}
           
        </div>
       
    );

};

export default App;