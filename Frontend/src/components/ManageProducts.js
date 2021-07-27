import React , {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Manageproductcard from './Manageproductcard';


function ManageUsers() {
     const [products, setProducts] = useState([]);
     useEffect( () => {
          const fetchdata = async () => {
               axios.get('http://localhost:5000/products')
               .then( res => {
                    setProducts(res.data.products);
               })
          }
          fetchdata();
          return () => {};
     }, [])          

     

     return (
          <div>
               <div className="manageproduct-heading product">
                    <div className="adminpanel_heading">Product List</div>
                    <button className="addproduct">
                    <Link to="/addproduct" className="text-black">
                    Add New Product
                    </Link>
                    </button>
                    {/* <button className="addproduct">Add New Product</button> */}
               </div>
               
               <div className="products_pane">
                         {products.map((pro) => {
                                   return (
                                        
                                        <Manageproductcard key = {pro.id} id = {pro.id}title = {pro.title} price = {pro.price} rating = {pro.rating} image = {pro.image}/>
                                        
                                   )
                         })}
                    </div>
               
          </div>
     )
}

export default ManageUsers
