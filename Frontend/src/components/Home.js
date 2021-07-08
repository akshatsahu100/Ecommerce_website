import React , {useEffect, useState} from 'react';
import axios from 'axios';
import "./Home.css";
import Product from './Product';
// import products from "../productsList";

function Home() {
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
          <div className="home">
               <div className="home_container">
                    <img
                         className="home_image"
                         src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                         alt=""
                    />
                    <div className="products_pane">
                         {products.map((pro) => {
                                   return (
                                        
                                        <Product key = {pro.id} id = {pro.id}title = {pro.title} price = {pro.price} rating = {pro.rating} image = {pro.image}/>
                                        
                                   )
                         })}
                    </div>
               </div>
          </div>
     )
}

export default Home
