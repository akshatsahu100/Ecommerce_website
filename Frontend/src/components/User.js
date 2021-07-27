import React from 'react'
import './User.css'

function User({name, id, isAdmin, email}) {
     return (
          <div className="user-panel">
               <div id="user-id"> {id}</div>
               <div id="user-name"> {name} </div>
               <div id="user-email"> {email}</div>
               <div id = "user-admin"> {isAdmin ? "Admin": "Not Admin"}</div>
               <div id='edit-button' className="button"> Edit </div>
               <div id='delete-button' className="button"> Delete </div>
          </div>
     )
}

export default User
