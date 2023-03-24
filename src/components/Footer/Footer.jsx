import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            quibusdam eaque nesciunt assumenda in, vero unde voluptate saepe
            error eligendi eveniet dolores tenetur ipsum officiis at, atque,
            placeat rem quia?
          </span>
        </div>
        <div className="item">
          <h1>contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            quibusdam eaque nesciunt assumenda in, vero unde voluptate saepe
            error eligendi eveniet dolores tenetur ipsum officiis at, atque,
            placeat rem quia?
          </span>
        </div>
      </div>

      <div className="bottom">
        <div className="left">
          <span className="logo">THREADS & TRENDS</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>

        <div className="right">
          <img
            src="https://www.launchtip.com/wp-content/webpc-passthru.php?src=https://www.launchtip.com/wp-content/uploads/2021/04/Screenshot-2021-05-01-at-18.06.24.png&nocache=1"
            alt=""
            width="400px"
            height="60px"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
