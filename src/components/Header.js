import { useState, useEffect, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  // let btnName = "Login";   //normal js variable by which nothing get change from login to logout.
  let [btnName, setbtnName] = useState("Login");
  const OnlineStatus = useOnlineStatus();

  //ep11 part2
  const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser);

  useEffect(() => {
    console.log("useEffect called");
  }, [btnName]);

  //selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between shadow-md">
      <div className="logo-container">
        <img className="w-30" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 text-sm text-gray-800 ">
          <li className="px-4 ">
            Online Status: {OnlineStatus ? "✅" : "❌"}{" "}
          </li>
          <li className="px-4 cursor-pointer hover:underline hover:text-[15px] transition duration-300 ease-in-out">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 hover:underline hover:text-[15px] transition duration-300 ease-in-out">
            {/* 12. now contact the routes to page in react never use ankertag bcz it refresh whole page to avoid this use link. */}
            {/* <a href="/about">About Us</a> */}
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 hover:underline hover:text-[15px] transition duration-300 ">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 hover:underline hover:text-[15px] transition duration-300 ease-in-out">
            <Link to="/Instamart">Instamart</Link>
          </li>
          <li className="px-4 hover:underline hover:text-[15px] transition duration-300 ease-in-out">
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>{" "}
          </li>
          <button
            className="cursor-pointer hover:underline hover:text-[15px] transition duration-300 ease-in-out"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
