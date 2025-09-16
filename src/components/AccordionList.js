import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const AccordionList = ({ items, dummy }) => {
  console.log(items);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //Dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200  border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12 ">
            <div className="py-2 font-bold">
              <p>{item.card.info.name}</p>
              <p>
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </p>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 rounded-lg p-1">
            <div>
              <img src={CDN_URL + item.card.info.imageId} />{" "}
            </div>
            <div className=" flex justify-center items-center">
              <button
                className="bottom-20 p-1 mt-2 text-xs  rounded-lg  text-orange-500 font-bold shadow-lg hover:bg-orange-500 hover:text-white"
                onClick={() => handleAddItem(item)}
              >
                ADD +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionList;
