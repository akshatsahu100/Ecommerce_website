import React from 'react'
import './ManageProductCard.css'

function Manageproductcard({id, title, image, price, rating }) {
     return (
          <div className="product-container">
               <div className="product-panel">
                    <div id="product-id"> {id}</div>
                    <div id="product-name"> {title} </div>
                    <div id="product-image"> {image}</div>
                    <div id ="product-price"> {price}</div>
                    <div id="product-rating">{rating}</div>
                    <div>
                    <div id='edit-button' className="button mb-5"> Edit </div>
                    <div id='delete-button' className="button"> Delete </div>
                    </div>
                    
               </div>
               
          </div>
     )
}

export default Manageproductcard
