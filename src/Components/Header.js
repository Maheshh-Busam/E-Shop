import React from "react";
import "./Header.css";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";




function Header() {
  const [{basket}, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="header__logo">
          <img src="https://www.pngkey.com/png/full/209-2092097_-img-nintendo-eshop-logo-png.png" alt="" className="header__logoImage" />
        </div>
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="nav__item">
          <div className="nav__itemLineOne" fontSize="large">Hello Guest</div>
          <Link to='/login' style={{ textDecoration: "none" }}><div className="signIn" fontSize="large">Sign In</div></Link>
        </div>
        <div className="nav__item">
          <div className="nav__itemLineOne">Your</div>
          <div className="nav__itemLineTwo">Shop</div>
        </div>

        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="nav__itemBasket">
            <ShoppingBasketIcon fontSize="large" />
            <div className="nav__itemLineTwo nav__basketCount">{basket.length}</div>
          </div>
        </Link>

        <div className="nav__profile">
          <Link to='/profile' style={{ textDecoration: "none"}}><AccountCircleIcon fontSize="large" className="nav__profileIcon" /></Link>
        </div>
      </div>
    </div>
  )
}

export default Header
