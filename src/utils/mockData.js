//3. cont-part


const resList = [
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "55473",
        name: "Pizza Hut",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/2967d497-2449-4e24-b771-98138a38ded3_55473.JPG",
        locality: "Sector 10",
        areaName: "Rohini",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 4.1,
        parentId: "721",
        avgRatingString: "4.1",
        totalRatingsString: "8.3K+",
        sla: {
          deliveryTime: 25,
          lastMileTravel: 2.2,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "2.2 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: { nextCloseTime: "2025-08-26 04:00:00", opened: true },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: { entityBadges: { imageBased: {}, textBased: {}, textExtendedBadges: {} } },
        aggregatedDiscountInfoV3: { header: "ITEMS", subHeader: "AT ₹98" },
        orderabilityCommunication: { title: {}, subTitle: {}, message: {}, customIcon: {} },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: { mediaType: "ADS_MEDIA_ENUM_IMAGE", lottie: {}, video: {} }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: { aggregatedRating: { rating: "--" } },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      cta: {
        link: "https://www.swiggy.com/city/delhi/pizza-hut-sector-10-rohini-rest55473",
        text: "RESTAURANT_MENU",
        type: "WEBLINK"
      }
    },
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "603438",
        name: "Chinese Wok",
        cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
        locality: "Sector 7",
        areaName: "Rohini",
        costForTwo: "₹250 for two",
        cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
        avgRating: 4.2,
        parentId: "61955",
        avgRatingString: "4.2",
        totalRatingsString: "2.1K+",
        sla: {
          deliveryTime: 28,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: { nextCloseTime: "2025-08-26 01:00:00", opened: true },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: { entityBadges: { imageBased: {}, textBased: {}, textExtendedBadges: {} } },
        aggregatedDiscountInfoV3: { header: "ITEMS", subHeader: "AT ₹129" },
        orderabilityCommunication: { title: {}, subTitle: {}, message: {}, customIcon: {} },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: { mediaType: "ADS_MEDIA_ENUM_IMAGE", lottie: {}, video: {} }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: { aggregatedRating: { rating: "--" } },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      cta: {
        link: "https://www.swiggy.com/city/delhi/chinese-wok-sector-7-rohini-rest603438",
        text: "RESTAURANT_MENU",
        type: "WEBLINK"
      }
    },
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "444780",
        name: "Theobroma",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/14/b48b3136-4a67-41dd-afd9-cdbedd3510b9_444780.JPG",
        locality: "Sector 3",
        areaName: "Rohini",
        costForTwo: "₹400 for two",
        cuisines: ["Bakery", "Desserts"],
        avgRating: 4.6,
        parentId: "1040",
        avgRatingString: "4.6",
        totalRatingsString: "4.5K+",
        sla: {
          deliveryTime: 16,
          lastMileTravel: 2.2,
          serviceability: "SERVICEABLE",
          slaString: "15-20 mins",
          lastMileTravelString: "2.2 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: { nextCloseTime: "2025-08-26 00:00:00", opened: true },
        badges: {
          imageBadges: [
            { imageId: "Rxawards/_CATEGORY-Desserts.png", description: "Delivery!" },
            { imageId: "newg.png", description: "Gourmet" }
          ]
        },
        isOpen: true,
        type: "F",
        aggregatedDiscountInfoV3: { header: "ITEMS", subHeader: "AT ₹290" },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT"
      },
      cta: {
        link: "https://www.swiggy.com/city/delhi/theobroma-sector-3-rohini-rest444780",
        text: "RESTAURANT_MENU",
        type: "WEBLINK"
      }
    },
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "785298",
        name: "Olio - The Wood Fired Pizzeria",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/d1dcb958-d1d4-4f8b-a3c1-8ca99c2aa5a6_785298.JPG",
        locality: "KHASRA NO. 22",
        areaName: "NIHANKARI SATSANG BHAWAN",
        costForTwo: "₹300 for two",
        cuisines: ["Pizzas", "Pastas", "Italian", "Fast Food", "Snacks", "Beverages", "Desserts"],
        avgRating: 4.2,
        parentId: "11633",
        avgRatingString: "4.2",
        totalRatingsString: "2.3K+",
        sla: {
          deliveryTime: 29,
          lastMileTravel: 1.8,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "1.8 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: { nextCloseTime: "2025-08-26 06:00:00", opened: true },
        badges: {
          imageBadges: [
            { imageId: "android/static-assets/icons/big_rx.png", description: "bolt!" },
            { imageId: "newg.png", description: "Gourmet" }
          ]
        },
        isOpen: true,
        type: "F",
        aggregatedDiscountInfoV3: { header: "ITEMS", subHeader: "AT ₹99" }
      },
      cta: {
        link: "https://www.swiggy.com/city/delhi/olio-the-wood-fired-pizzeria-khasra-no-22-nihankari-satsang-bhawan-rest785298",
        text: "RESTAURANT_MENU",
        type: "WEBLINK"
      }
    },
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "602137",
        name: "Big Bowl",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/deff0d02-ca1d-4ef9-9d62-b0cbeabf33d3_602137.JPG",
        locality: "Sector 7",
        areaName: "Rohini",
        costForTwo: "₹250 for two",
        cuisines: ["Chinese", "Tibetan", "Desserts"],
        avgRating: 4.3,
        parentId: "434792",
        avgRatingString: "4.3",
        totalRatingsString: "759",
        sla: {
          deliveryTime: 25,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: { nextCloseTime: "2025-08-26 01:00:00", opened: true },
        badges: {},
        isOpen: true,
        type: "F",
        aggregatedDiscountInfoV3: { header: "ITEMS", subHeader: "AT ₹129" }
      },
      cta: {
        link: "https://www.swiggy.com/city/delhi/big-bowl-sector-7-rohini-rest602137",
        text: "RESTAURANT_MENU",
        type: "WEBLINK"
      }
    },
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "542245",
        name: "Baskin Robbins - Ice Cream Desserts",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/24/a3680c45-03ed-4c5a-9793-1e7b99d7dad7_542245.JPG",
        locality: "Sector 8",
        areaName: "Rohini",
        costForTwo: "₹250 for two",
        cuisines: ["Desserts", "Ice Cream"],
        avgRating: 4.7,
        veg: true,
        parentId: "5588",
        avgRatingString: "4.7",
        totalRatingsString: "395",
        sla: {
          deliveryTime: 19,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "15-20 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: { nextCloseTime: "2025-08-25 23:30:00", opened: true },
        badges: {
          imageBadges: [
            { imageId: "Ratnesh_Badges/Rx_Awards_2025/Icecream.png", description: "Delivery!" }
          ]
        },
        isOpen: true,
        type: "F",
        aggregatedDiscountInfoV3: { header: "50% OFF", subHeader: "UPTO ₹90" }
      },
      cta: {
        link: "https://www.swiggy.com/city/delhi/baskin-robbins-ice-cream-desserts-sector-8-rohini-rest542245",
        text: "RESTAURANT_MENU",
        type: "WEBLINK"
      }
    },
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "347493",
        name: "Hudson Chopsticks - Fresh Chinese",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/19/6f646dce-24bb-462e-bd02-574f4ffd750f_347493.jpg",
        locality: "Bhagwan Mahavir Marg",
        areaName: "Prashant Vihar",
        costForTwo: "₹300 for two",
        cuisines: [
          "Chinese",
          "Thai",
          "Asian",
          "Snacks",
          "Tibetan",
          "Nepalese",
          "Pan-Asian",
          "Seafood",
          "Beverages",
          "Desserts"
        ],
        avgRating: 4.1,
        parentId: "562449",
        avgRatingString: "4.1",
        totalRatingsString: "6.6K+",
        sla: {
          deliveryTime: 27,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: { nextCloseTime: "2025-08-26 00:00:00", opened: true },
        badges: {},
        isOpen: true,
        type: "F",
        aggregatedDiscountInfoV3: { header: "ITEMS", subHeader: "AT ₹144" }
      },
      cta: {
        link: "https://www.swiggy.com/city/delhi/hudson-chopsticks-fresh-chinese-bhagwan-mahavir-marg-prashant-vihar-rest347493",
        text: "RESTAURANT_MENU",
        type: "WEBLINK"
      }
    },
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "60965",
        name: "New Durga Dosa Corner",
        cloudinaryImageId: "s0y1aeqnttvnpxhyaabh",
        locality: "Paschim Vihar",
        areaName: "Paschim Vihar",
        costForTwo: "₹150 for two",
        cuisines: ["South Indian", "Snacks", "Indian"],
        avgRating: 4.2,
        veg: true,
        parentId: "16712",
        avgRatingString: "4.2",
        totalRatingsString: "9.4K+",
        sla: {
          deliveryTime: 32,
          lastMileTravel: 5,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "5.0 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: { nextCloseTime: "2025-08-25 23:00:00", opened: true },
        badges: {
          imageBadges: [
            { imageId: "v1695133679/badges/Pure_Veg111.png", description: "pureveg" }
          ]
        },
        isOpen: true,
        type: "F",
        externalRatings: {
          aggregatedRating: { rating: "3.9", ratingCount: "51" },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
        }
      },
      cta: {
        link: "https://www.swiggy.com/city/delhi/new-durga-dosa-corner-paschim-vihar-rest60965",
        text: "RESTAURANT_MENU",
        type: "WEBLINK"
      }
    }
  ];

export default resList;