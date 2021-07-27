import React , {useEffect, useState} from 'react';
import axios from 'axios';
import User from './User';

function ManageUsers() {
     const [users, setUsers] = useState([]);
     useEffect( () => {
          const fetchdata = async () => {
               axios.get('http://localhost:5000/users')
               .then( res => {
                    setUsers(res.data.users);
               })
          }
          fetchdata();
          return () => {};
     }, [])    
     

     return (
          <div>
               
               <div className="adminpanel_heading">User List</div> 
               <div className="users_pane">
                         {users.map((user) => {
                                   return (
                                        
                                        <User key = {user.id} id = {user.id}name = {user.name} email = {user.email} isAdmin = {user.isAdmin}/>
                                        
                                   )
                         })}
                    </div>
               
          </div>
     )
}

export default ManageUsers
