import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {
  // let btnName = "Login";   //normal js variable by which nothing get change from login to logout.
  let [btnName, setbtnName] = useState("Login");
  const OnlineStatus = useOnlineStatus();

    useEffect( () => {
      console.log("useEffect called");
    }, [btnName]);

  return(
    <div className="flex justify-between bg-pink-100 shadow">
      <div className="logo-container">
        <img className="w-20 h-full" src={LOGO_URL}/>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4" >
          <li className="px-4">Online Status: {OnlineStatus ? "✅" : "❌"} </li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4">
            {/* 12. now contact the routes to page in react never use ankertag bcz it refresh whole page to avoid this use link. */}
           {/* <a href="/about">About Us</a> */}  
           <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
           <li className="px-4">
            <Link to="/Instamart">Instamart</Link>
          </li>
          <li className="px-4">Cart</li>
          <button className="login" onClick={() => {
            btnName === "Login" ? setbtnName("Logout"):setbtnName("Login");
          }} >{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;