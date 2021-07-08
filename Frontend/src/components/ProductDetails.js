import React, {useState} from 'react'
import productlist from '../productsList'
import {Link} from 'react-router-dom';


function ProductDetails(props) {
     let temp = props.match.params.id;
     let product;
     for(let i=0; i<productlist.length; i++){
          if(productlist[i].id === temp){
               product = productlist[i];
               break;
          }
     }
     const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
//   const userSignin = useSelector((state) => state.userSignin);
//   const { userInfo } = userSignin;
//   const productDetails = useSelector((state) => state.productDetails);
//   const { product, loading, error } = productDetails;
//   const productReviewSave = useSelector((state) => state.productReviewSave);
//   const { success: productSaveSuccess } = productReviewSave;
//   const dispatch = useDispatch();
     return (
          <div>
               <div>
          <div className="back-to-result">
               <Link to="/">Back to result</Link>
          </div>
      
        <div>
          <div className="details">
            <div className="details-image">
              <img src={product.image} alt="product"></img>
            </div>
            <div className="details-info">
              <ul>
                <li>
                  <h4>{product.name}</h4>
                </li>
                <li>
                  {/* <a href="#reviews">
                    <Rating
                      value={product.rating}
                      text={product.numReviews + ' reviews'}
                    />
                  </a> */}
                </li>
                <li>
                  Price: <b>${product.price}</b>
                </li>
                <li>
                  Description:
                  <div className="description">{product.Description}</div>
                </li>
              </ul>
            </div>
            <div className="details-action">
              <ul>
                <li>Price: {product.price}</li>
                <li>
                  Status:{' '}
                  {product.countInStock > 0 ? 'In Stock' : 'Unavailable.'}
                </li>
                <li>
                  Qty:{' '}
                  <select
                    value={qty}
                    onChange={(e) => {
                      setQty(e.target.value);
                    }}
                  >
                    {[...Array(product.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </li>
                <li>
                  {product.countInStock > 0 && (
                    <button
                    //   onClick={handleAddToCart}
                      className="button primary"
                    >
                      Add to Cart
                    </button>
                  )}
                </li>
              </ul>
            </div>
          </div>
          <div className="content-margined">
            <h2>Reviews</h2>
            {/* {!product.reviews.length && <div>There is no review</div>} */}
            <ul className="review" id="reviews">
              {/* {product.reviews.map((review) => (
                <li key={review._id}>
                  <div>{review.name}</div>
                  <div>
                    <Rating value={review.rating}></Rating>
                  </div>
                  <div>{review.createdAt.substring(0, 10)}</div>
                  <div>{review.comment}</div>
                </li>
              ))} */}
              <li>
                <h3>Write a customer review</h3>
                {/* {userInfo ? ( */}
                  <form>
                    <ul className="form-container">
                      <li>
                        <label htmlFor="rating">Rating</label>
                        <select
                          name="rating"
                          id="rating"
                          value={rating}
                          onChange={(e) => setRating(e.target.value)}
                        >
                          <option value="1">1- Poor</option>
                          <option value="2">2- Fair</option>
                          <option value="3">3- Good</option>
                          <option value="4">4- Very Good</option>
                          <option value="5">5- Excelent</option>
                        </select>
                      </li>
                      <li>
                        <label htmlFor="comment">Comment</label>
                        <textarea
                          name="comment"
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                        ></textarea>
                      </li>
                      <li>
                        <button type="submit" className="button primary">
                          Submit
                        </button>
                      </li>
                    </ul>
                  </form>
                ) 
                
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
          </div>
     )
}

export default ProductDetails
