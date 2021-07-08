import React from 'react'
import "./Alerts.css"

function Alerts(props) {
     return (
          <div>
               {
               props.messagetype === "success" ?
               <div className="alert success-alert">
                    <h3>{props.message}</h3>
               </div> :
               null
               } 
               {
               props.messagetype === "failure" ?
               <div className="alert danger-alert">
                    <h3>{props.message}</h3>
               </div> :
               null
               } 
          
          </div>
     )
}

export default Alerts
