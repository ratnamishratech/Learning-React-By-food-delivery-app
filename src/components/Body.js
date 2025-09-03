import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    //6. Normal JS variable(which doesnot change UI or if we want to change UI many lines of code needed which is easy in react by using hooks/state variable.)
    // let listofRes = [
    //     {
    //   "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    //   info: {
    //     id: "55473",
    //     name: "Pizza Hut",
    //     cloudinaryImageId:
    //       "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/2967d497-2449-4e24-b771-98138a38ded3_55473.JPG",
    //     locality: "Sector 10",
    //     areaName: "Rohini",
    //     costForTwo: "₹350 for two",
    //     cuisines: ["Pizzas"],
    //     avgRating: 4.1,
    //     parentId: "721",
    //     avgRatingString: "4.1",
    //     totalRatingsString: "8.3K+",
    //     sla: {
    //       deliveryTime: 25,
    //       lastMileTravel: 2.2,
    //       serviceability: "SERVICEABLE",
    //       slaString: "25-30 mins",
    //       lastMileTravelString: "2.2 km",
    //       iconType: "ICON_TYPE_EMPTY"
    //     },
    //     availability: { nextCloseTime: "2025-08-26 04:00:00", opened: true },
    //     badges: {},
    //     isOpen: true,
    //     type: "F",
    //     badgesV2: { entityBadges: { imageBased: {}, textBased: {}, textExtendedBadges: {} } },
    //     aggregatedDiscountInfoV3: { header: "ITEMS", subHeader: "AT ₹98" },
    //     orderabilityCommunication: { title: {}, subTitle: {}, message: {}, customIcon: {} },
    //     differentiatedUi: {
    //       displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //       differentiatedUiMediaDetails: { mediaType: "ADS_MEDIA_ENUM_IMAGE", lottie: {}, video: {} }
    //     },
    //     reviewsSummary: {},
    //     displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //     restaurantOfferPresentationInfo: {},
    //     externalRatings: { aggregatedRating: { rating: "--" } },
    //     ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    //   },
    //   cta: {
    //     link: "https://www.swiggy.com/city/delhi/pizza-hut-sector-10-rohini-rest55473",
    //     text: "RESTAURANT_MENU",
    //     type: "WEBLINK"
    //   }
    // },
    // {
    //   "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    //   info: {
    //     id: "603438",
    //     name: "Chinese Wok",
    //     cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
    //     locality: "Sector 7",
    //     areaName: "Rohini",
    //     costForTwo: "₹250 for two",
    //     cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
    //     avgRating: 4.2,
    //     parentId: "61955",
    //     avgRatingString: "4.2",
    //     totalRatingsString: "2.1K+",
    //     sla: {
    //       deliveryTime: 28,
    //       lastMileTravel: 3,
    //       serviceability: "SERVICEABLE",
    //       slaString: "25-30 mins",
    //       lastMileTravelString: "3.0 km",
    //       iconType: "ICON_TYPE_EMPTY"
    //     },
    //     availability: { nextCloseTime: "2025-08-26 01:00:00", opened: true },
    //     badges: {},
    //     isOpen: true,
    //     type: "F",
    //     badgesV2: { entityBadges: { imageBased: {}, textBased: {}, textExtendedBadges: {} } },
    //     aggregatedDiscountInfoV3: { header: "ITEMS", subHeader: "AT ₹129" },
    //     orderabilityCommunication: { title: {}, subTitle: {}, message: {}, customIcon: {} },
    //     differentiatedUi: {
    //       displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //       differentiatedUiMediaDetails: { mediaType: "ADS_MEDIA_ENUM_IMAGE", lottie: {}, video: {} }
    //     },
    //     reviewsSummary: {},
    //     displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //     restaurantOfferPresentationInfo: {},
    //     externalRatings: { aggregatedRating: { rating: "--" } },
    //     ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    //   },
    //   cta: {
    //     link: "https://www.swiggy.com/city/delhi/chinese-wok-sector-7-rohini-rest603438",
    //     text: "RESTAURANT_MENU",
    //     type: "WEBLINK"
    //   }
    // },
    // {
    //   "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    //   info: {
    //     id: "444780",
    //     name: "Theobroma",
    //     cloudinaryImageId:
    //       "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/14/b48b3136-4a67-41dd-afd9-cdbedd3510b9_444780.JPG",
    //     locality: "Sector 3",
    //     areaName: "Rohini",
    //     costForTwo: "₹400 for two",
    //     cuisines: ["Bakery", "Desserts"],
    //     avgRating: 4.6,
    //     parentId: "1040",
    //     avgRatingString: "4.6",
    //     totalRatingsString: "4.5K+",
    //     sla: {
    //       deliveryTime: 16,
    //       lastMileTravel: 2.2,
    //       serviceability: "SERVICEABLE",
    //       slaString: "15-20 mins",
    //       lastMileTravelString: "2.2 km",
    //       iconType: "ICON_TYPE_EMPTY"
    //     },
    //     availability: { nextCloseTime: "2025-08-26 00:00:00", opened: true },
    //     badges: {
    //       imageBadges: [
    //         { imageId: "Rxawards/_CATEGORY-Desserts.png", description: "Delivery!" },
    //         { imageId: "newg.png", description: "Gourmet" }
    //       ]
    //     },
    //     isOpen: true,
    //     type: "F",
    //     aggregatedDiscountInfoV3: { header: "ITEMS", subHeader: "AT ₹290" },
    //     reviewsSummary: {},
    //     displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT"
    //   },
    //   cta: {
    //     link: "https://www.swiggy.com/city/delhi/theobroma-sector-3-rohini-rest444780",
    //     text: "RESTAURANT_MENU",
    //     type: "WEBLINK"
    //   }
    // },
    // ];
    //7. state var
    //   let [listofRes, setlistofRes] = useState(resList);
    // or
    // const arr = useState(resList);
    // let [listofRes, setlistofRes] = arr;

    let [listofRes, setlistofRes] = useState([]);
    //9. to make copy of listofRes to filter the res in those ones not in filter ones.
    let [filterRes, setfilterRes] = useState([]);

    let [searchText, setsearchText] = useState("");

    //whenever state var update anything react triggers a reconciliation cycle(re-render the comp).
    console.log("Body Rendered");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        setlistofRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);  
        setfilterRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);        
    };

    //conditional Rendering
    // if(listofRes.length === 0){
    //     return<Shimmer/>
    // }
    //or
    return listofRes.length === 0 ? (
        <Shimmer/>
    ) : (
        <div className="body">
            <div className="filter">
                {/* 8. seach text box  */}
              <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(e) => {
                    setsearchText(e.target.value);
                }}/>
                <button onClick={() => {
                    //filter the res cards and update the UI by search-text
                    const filteredRes = listofRes.filter((res) =>
                       res.info.name.toLowerCase().includes(searchText.toLowerCase())
                   );
                    // setlistofRes(filteredRes);     //9. cont....
                     setfilterRes(filteredRes);
                }}>Search</button>
              </div>
                {/* 6. cont...
                <button className="filter-one" onClick={() => {
                    listofRes = listofRes.filter(
                        (res) => res.info.avgRating > 4.5
                    );
                    console.log(listofRes);
                }}>
                    Top Rated Restaurant
                </button> */}

                {/* 7. cont... */}
                <button className="filter-one" onClick={() => {
                    const filteredList = listofRes.filter(
                        (res) => res.info.avgRating > 4.2
                    );
                     setfilterRes(filteredList); 
                }}>
                    Top Rated Restaurant
                </button>
            </div>
            <div className="res-cont">
                {/* 1....
                <ResCard/> */}

                {/* 2...
                <ResCard resdata="kfc" name="Biryani"/>
                <ResCard resdata="domino"name="burger"/> */}

                {/* <ResCard resData={resList}/> */}

                {/* 5. use for loop or map(preferable map) for showing all cards if we not use this than tough to wright [0], [1] etc like this if data contains multiple cards which is in the form of array. */}
                  {/* {listofRes.map((restaurant) => (
                      <ResCard key={restaurant.info.id} resData={restaurant.info} />
                  ))} */}
                  {/* 9.cont... */}
                   {filterRes.map((restaurant) => (
                      <ResCard key={restaurant.info.id} resData={restaurant.info} />
                  ))}
            </div>
        </div>
    );
};

export default Body;