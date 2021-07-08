import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import userList from "../userList";

function Register() {
     const [name, setName] = useState('');
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [confirmpassword, setConfirmPassword] = useState('');
     const [list, setlist] = useState(userList);
     const newproduct = {
        name: name,
        email: email,
        password: password,
        isAdmin: false
     }
     const submitHandler = (e) => {
        e.preventDefault();
        setlist((list) => {
            return [...list, newuser];
        });
        setlist();
        console.log(newuser);
        
     }
     
     return (
          
          <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                />
            </Link>

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
