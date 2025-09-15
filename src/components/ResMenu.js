import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useAsyncError, useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useResMenu from "../utils/useResMenu";
import ResCategory from "./ResCategory";

const ResMenu = () => {

  //ep11(part-2 context to avoid props drilling(eg dummy))
  const dummy = "Dummy Data passed";

  // 13. now create own custom hooks to make code more readable, mentainable and testable.
    // const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();

    const resInfo = useResMenu(resId);

    const [showIndex, setshowIndex] = useState(null);

    // useEffect(() => {
    //     fetchMenu();
    // }, []);
    
    // const fetchMenu = async () => {
    //     const data = await fetch(MENU_API + "&restaurantId=" +resId +"&catalog_qa=undefined" );
    //     const json = await data.json();
        
    //     setResInfo(json?.data);
    // };
   if (resInfo === null) return <Shimmer/>;

   const {name, avgRating, costForTwo, cuisines, sla} = resInfo?.cards[2]?.card?.card?.info;

const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || [];


// console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
// ep 11 
  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  // console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl m-3">{name}</h1>
      <div className="font-serif">
        <h2>⭐ {avgRating} - ₹ {costForTwo / 100} for two</h2>
       <h3 className="text-red-500">{cuisines?.join(", ")}</h3>
       <h3>{sla?.slaString}</h3>
      </div>
      {/* categories accordions */}
      {categories.map((category, index) => (
  <ResCategory key={category?.card?.card?.title || i} data={category?.card?.card} showItems={index === showIndex ? true : false} setshowIndex = {() => setshowIndex(index)} dummy = {dummy}
  />
))}

    </div>
  );
};

export default ResMenu;