import React from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {Link} from 'react-router-dom'

function Header() {
     return (

          <div className="header">
               <Link to='/' className="links">
                    <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="AMAZON"/>
               </Link>

               <div className="header_search">
                    <input type="text" className="header_searchInput" placeholder="Search here"/>
                    <SearchIcon className="header_searchIcon" />
               </div>

               <div className="header_nav">

                    <div className="header_option">
                         <span className="header_optionLineOne">Hello Guest</span>
                         <span className="header_optionLineTwo">
                              <Link to='/login' className="links">Sign In</Link>
                              
                         </span>
                    </div>
                    <div className="header_option">
                         <span className="header_optionLineOne">Returns</span>
                         <span className="header_optionLineTwo">& Orders</span>
                    </div>
                    <div className="header_option">
                         <span className="header_optionLineOne">Your</span>
                         <span className="header_optionLineTwo">Prime</span>
                    </div>
                    <div className="header_optionBasket">
                         <ShoppingBasketIcon />
                         <span className="header_optionLineTwo header_basketCount">
                              0
                         </span>
                    </div>

               </div>

          </div>

     )
}

export default Header;
