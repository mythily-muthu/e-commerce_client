import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../Cart/Cart";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="wrapper">
      {/* left side */}
      <div className="left">
        <div className="item">
          <img
            src="https://cdn.firstcry.com/education/2022/04/24105849/193394741.jpg"
            alt=""
            width="25px"
            height="17px"
          />
          <KeyboardArrowDownIcon />
        </div>
        <div className="item">
          <span>IND</span>
          <KeyboardArrowDownIcon />
        </div>
        <div className="item">
          <Link className="link" to="/products/1">
            Men
          </Link>
        </div>
        <div className="item">
          <Link className="link" to="/products/2">
            Women
          </Link>
        </div>
        <div className="item">
          <Link className="link" to="/products/3">
            Children
          </Link>
        </div>
        <div className="item">
          <Link className="link" to="/products/4">
            Accessories
          </Link>
        </div>
      </div>
      {/* center */}
      <div className="center">
        <Link className="link" to="/">
          THREADS & TRENDS
        </Link>
      </div>

      {/* right side */}
      <div className="right">
        <div className="item">
          <Link className="link" to="/">
            Homepage
          </Link>
        </div>
        <div className="item">
          <Link className="link" to="/">
            About
          </Link>
        </div>
        <div className="item">
          <Link className="link" to="/">
            Contact
          </Link>
        </div>
        <div className="item">
          <Link className="link" to="/">
            Stores
          </Link>
        </div>
        <div className="icons">
          <SearchIcon />
          <PersonOutlineOutlinedIcon />
          <FavoriteBorderOutlinedIcon />
          {/* shopping cart */}
          <div className="cartIcon" onClick={() => setOpen(!open)}>
            <ShoppingCartOutlinedIcon />
            <span>0</span>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
