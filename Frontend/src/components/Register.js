import React, { useState } from 'react';
import { Link } from "react-router-dom";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import userList from "../userList";
import Alerts from "./Alerts";
import axios from 'axios';

function Register() {
     const [name, setName] = useState('');
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [confirmpassword, setConfirmPassword] = useState('');
     const [list, setlist] = useState(userList);
     const [isadmin, setIsadmin] = useState(false);
     const [alert, setAlert] = useState("");
     const [alertmessage, setAlertmessage] = useState("");
     const newuser = {
        name: name,
        email: email,
        password: password,
        isAdmin: isadmin
     }
     function setToDefault(){
         setName('');
         setEmail('');
         setPassword('');
         setConfirmPassword('');
         setIsadmin(false);
     }
     const submitHandler = (e) => {
        e.preventDefault();
        if(password !== "" && password === confirmpassword){
            axios.post('http://localhost:5000/user/register', {
                name: name,
                email: email,
                password: password,
                isAdmin: true
            })
            .then(res => {
                setAlert("success");
                setAlertmessage("User registration successful");
                setToDefault();
            })
            .catch( err => {
                setAlert("failure");
                setAlertmessage(err);
            });
            
        }
        else if(password === ""){
            setAlert("failure");
            setAlertmessage("Password cannot be empty");
        }
        else{
            setAlert("failure");
            setAlertmessage("Passwords don't match");
        }
        setInterval(() => {
            setAlert('');
        }, 3000);
     }
     
     return (
          
          <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                    alt="Amazon"

                />
            </Link>
            <Alerts messagetype = {alert} message ={alertmessage}/>
            <div className='login__container'>
                <h1>Register</h1>

                <form>
                    <h5>Name</h5>
                    <input type='text' value={name} onChange={e => setName(e.target.value)} />

                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                    
                    <h5>Confirm Password</h5>
                    <input type='password' value={confirmpassword} onChange={e => setConfirmPassword(e.target.value)} />

                    <FormControlLabel
                        control={
                        <Checkbox
                            value={isadmin}
                            onChange={ e => setIsadmin(e.target.checked)}
                            name="checkedB"
                            color="primary"
                        />
                        }
                        label="Admin Account"
                    />
                    

                    <button type='submit' className='login__signInButton' onClick={submitHandler}>Register</button>
                </form>

                <p>
                    Already a member? Sign in to your Amazon Account
                </p>
                <Link to="/login">
                    <button className='login__registerButton'>Sign In</button>
                </Link>
            </div>
        </div>
     )
}

export default Register
