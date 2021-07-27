import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Alerts from "./Alerts";
import axios from 'axios';

function Addproduct() {
     const [title, setTitle] = useState('');
     const [brand, setBrand] = useState('');
     const [price, setPrice] = useState(0);
     const [category, setCategory] = useState('');
     const [rating, setrating] = useState(0);
     const [numReview, setNumReview] = useState(0);
     const [description, setDescription] = useState("");
     const [image, setImage] = useState("");
     const [countInStock, setCountinStock] = useState(0);
     const [alert, setAlert] = useState("");
     const [alertmessage, setAlertmessage] = useState("");
     const newproduct = {
        title: title,
        brand: brand,
        price: price,
        category: category,
        rating: rating,
        countInStock: countInStock,
        description: description,
        numReview: numReview,
        image: image  
     }
     function setToDefault(){
         setTitle('');
         setBrand('');
         setCategory('');
         setPrice(0);
         setrating(0);
         setNumReview(0);
         setCountinStock(0);
         setDescription("");
         setImage("");
     }
     const submitHandler = (e) => {
        e.preventDefault();
        
            axios.post('http://localhost:5000/product/', newproduct)
            .then(res => {
                setAlert("success");
                setAlertmessage("Product Added");
                setToDefault();
            })
            .catch( err => {
                setAlert("failure");
                setAlertmessage(err);
            });
            
        
        
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
            <div className='login__container width-60'>
                <h1>Add New Product</h1>

                <form>
                    <h5>title</h5>
                    <input type='text' value={title} onChange={e => setTitle(e.target.value)} />

                    <h5>Brand</h5>
                    <input type='text' value={brand} onChange={e => setBrand(e.target.value)} />

                    <h5>Price</h5>
                    <input type='number' value={price} onChange={e => setPrice(e.target.value)} />
                    
                    <h5>Category</h5>
                    <input type='text' value={category} onChange={e => setCategory(e.target.value)} />

                    <h5>countInStock</h5>
                    <input type='number' value={countInStock} onChange={e => setCountinStock(e.target.value)} />

                    <h5>Description</h5>
                    <input type='text' value={description} onChange={e => setDescription(e.target.value)} />
                    
                    <h5>Image URL</h5>
                    <input type='text' value={image} onChange={e => setImage(e.target.value)} />

                    <button type='submit' className='login__signInButton' onClick={submitHandler}>Add Product</button>
                </form>

                
            </div>
        </div>
     )
}

export default Addproduct
