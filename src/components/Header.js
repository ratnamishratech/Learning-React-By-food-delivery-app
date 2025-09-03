import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  // let btnName = "Login";   //normal js variable by which nothing get change from login to logout.
  let [btnName, setbtnName] = useState("Login");

    useEffect( () => {
      console.log("useEffect called");
    }, [btnName]);

  return(
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}/>
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>
            {/* 12. now contact the routes to page in react never use ankertag bcz it refresh whole page to avoid this use link. */}
           {/* <a href="/about">About Us</a> */}  
           <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button className="login" onClick={() => {
            btnName === "Login" ? setbtnName("Logout"):setbtnName("Login");
          }} >{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;