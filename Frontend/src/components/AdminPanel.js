import React from 'react'
import "./AdminPanel.css";
import {Link} from "react-router-dom";

function AdminPanel() {
     return (
          
          <div className="adminpanel">
               
               <div className="adminpanel_logo"> 
                    Admin Panel
               </div>

               <div className="adminpanel_nav">

                    <div className="adminpanel_option">
                         
                         <span className="header_optionLineTwo">
                              <Link to='/manageusers'>Manage Users</Link>   
                         </span>
                    </div>
                    <div className="adminpanel_option">
                         <span className="header_optionLineTwo">
                              <Link to='/manageproducts'>Manage products</Link> 
                         </span>
                    </div>

               </div>

          </div>
     )
}

export default AdminPanel;
