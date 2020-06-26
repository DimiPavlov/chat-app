import React from "react";
import "./Contact.css";
import PropTypes from "prop-types"


function Contact(props) {
    return  (
    <div className="Contact">
        <img className="avatar" 
                src={props.avatar} 
                alt= {props.name}/>
            <div>
                <p className="name">{props.name}</p>
                <div className="status">{props.status}
                     {/* <div className= "status-online" /> */}
    
                     {/* <div className="status-offline" /> */}
                        <p className="status-text"> {props.online ? <div className="status-online"></div>
                         : <div className="status-offline">  </div>}</p>
               
                </div>
            </div>
    </div>
    

    );
}



Contact.propTypes = {
        avatar: PropTypes.object,
        name: PropTypes.string,
        online: PropTypes.bool

}
export default Contact;

