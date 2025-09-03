import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const ResMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);
    
    const fetchMenu = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=26723&catalog_qa=undefined&submitAction=ENTER"
        );
        const json = await data.json();

        setResInfo(json?.data);
    };
   if (resInfo === null) return <Shimmer/>;

   const {name, avgRating, costForTwo, cuisines, sla} = resInfo?.cards[2]?.card?.card?.info;

const {itemCards} =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || [];

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>⭐ {avgRating}</h3>
      <h3>
        {cuisines?.join(", ")} - {costForTwo / 100} Rs.
      </h3>
      <h3>{sla?.slaString}</h3>

      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - Rs.
            {item?.card?.info?.price / 100 ||
              item?.card?.info?.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResMenu;