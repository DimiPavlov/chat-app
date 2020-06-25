import React from "react";
import "./Contact.css";


function Contact() {
    return(
    <div className="Contact">
        <img className="avatar" src="https://randomuser.me/api/portraits/women/8.jpg" 
             alt= "Dora Hill"/>
             <div>
        <p className="name">Dora Hill</p>
                <div className="status">
                <div className= "status-online" />
                <p className="status-text">online</p>
                </div>
            </div>
            
    </div>
    

    );
}




export default Contact;