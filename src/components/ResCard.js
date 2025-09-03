import { CDN_URL } from "../utils/constants";


const ResCard = ({ resData }) => {
  // const { resData } = props;

  const { 
    cloudinaryImageId, 
    name, 
    avgRating, 
    cuisines, 
    areaName, 
    sla 
  } =  resData; 

    return(
        // <div className="res-card" style={styleCard}>
        <div className="res-card" style={{ backgroundColor: "#f0f0f0"}}>
            <img className="img" src={CDN_URL + cloudinaryImageId}/>
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
            <h3>{name}</h3>
            <h4>⭐{avgRating}</h4>
            <h4>{sla?.slaString}</h4>
           <h4>{cuisines ? cuisines.join(", ") : ""}</h4>
            <h4>{areaName}</h4>
        </div>
    );
};

export default ResCard;