import React from 'react'
import {Link} from 'react-router-dom';
import './Product.css';

function Product({ id, title, image, price, rating }) {
     let targetpage = "/product/" + id;
     return (
          
               <div className="product">
                    <div className="product__info">
                         <p><Link to={targetpage} className="link">{title}</Link></p>
                         <p className="product__price">
                              <small>$</small>
                              <strong>{price} </strong>
                         </p>
                         <div className="product__rating">
                              {Array(rating)
                                   .fill()
                                   .map((_, i) => (
                                        <p> &#9733;</p>
                                   ))}
                         </div>
                    </div>
                    <Link to={targetpage} className="link">
                         <img src={image} alt="productImage" />
                    </Link>

                    <button>Add to Cart</button>
               </div>

     )
}

export default Product
