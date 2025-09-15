import { useState } from "react";
import AccordionList from "./AccordionList";

const ResCategory = ({ data, showItems, setshowIndex, dummy }) => {
  const { title, itemCards } = data;
  // const [showItems, setshowItems] = useState(false);
  // const handleClick = () => {
  //    setshowItems(!showItems);
  // };
  // i want when i click on one accordian than rest one if open the collapse automatically by this we do this =>  right now ResCategory contain the expand and collapse power but i want to take this power to its parent ResMenu this knwo as lifting the state up
  const handleClick = () => {
    setshowIndex();
  };
  return (
    <div>
      {/* 1.Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {title} ({itemCards?.length})
          </span>
          <span className="font-bold">⌄</span>
        </div>
        {/* 2.Accordian body */}
        {/* <AccordionList items = {data.itemCards} /> */}
        {/* now make accordion expand and collapse */}
        {showItems && <AccordionList items={data.itemCards} dummy={dummy} />}
      </div>
    </div>
  );
};

export default ResCategory;
