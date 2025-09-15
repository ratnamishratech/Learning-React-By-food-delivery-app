import { CDN_URL } from "../utils/constants";

const ResCard = ({ resData }) => {
  // const { resData } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData;

  return (
    // <div className="res-card" style={styleCard}>
    <div
      className=" m-4 p-4 w-[270px] rounded-lg bg-gray-100 hover:bg-gray-200 transform transition duration-300 hover:scale-90"
      //  style={{ backgroundColor: "#f0f0f0"}}
    >
      <img
        className="rounded-lg h-60 w-300"
        src={CDN_URL + cloudinaryImageId}
      />
      {/* 1. hardcoded data(writing manually):-
            <h3>Briyani</h3>
            <h4>4.4 stars</h4>   
            <h4> 38 min</h4> */}

      {/* 2. dynamic data by props:-
            <h3>{props.resdata}</h3>
            <h4>{props.name}</h4> */}
      {/* or destucturing */}
      {/* <h3>{resdata}</h3>
            <h4>{name}</h4> */}

      {/* 3. cont... */}
      {/* <h3>{resData.info.name}</h3>
            <h4>{resData.info.avgRating}</h4>
            <h4>{resData.info.sla.slaString}</h4>
            <h4>{resData.info.cuisines}</h4>
            <h4>{resData.info.areaName}</h4> */}
      {/* 4. destructuring */}
      <h3 className="font-bold overflow-hidden overflow-ellipsis whitespace-nowrap text-lg">
        {name}
      </h3>
      <p className="text-gray-600  overflow-hidden overflow-ellipsis whitespace-nowrap text-sm mb-1">
        {cuisines ? cuisines.join(", ") : ""}
      </p>
      <div className="flex gap-1 text-sm text-gray-800">
        <h4 className="inline-flex items-center bg-green-600 text-white px-2 py-1 rounded">
          ☆ {avgRating}
        </h4>
        <h4>•{sla?.slaString}</h4>
        <h4>•{costForTwo}</h4>
      </div>
    </div>
  );
};

export default ResCard;
