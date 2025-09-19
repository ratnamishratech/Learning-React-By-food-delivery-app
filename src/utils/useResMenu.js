import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useResMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://food-del-backend-xe66.onrender.com/api/menu/${resId}`
    );

    const json = await data.json();

    setResInfo(json?.data);
  };

  return resInfo;
};

export default useResMenu;
