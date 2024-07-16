import { useState ,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { resApi } from "../utils/links";
import Menupage from "./Menupage";
import Rescatogires from "./Rescatogires";


const Resmenu = ()=>{
    const {resId} = useParams();
    const [resInfo,setResInfo] = useState(null);
    useEffect(()=>{
        fetchdata();
    },[])
    const fetchdata = async ()=>{
        const dat = await fetch(resApi+resId);
        const json = await dat.json();
         await setResInfo(json.data);
    }
    if(resInfo===null) return <Shimmer />;
    const {slaString} = resInfo?.cards[2]?.card?.card?.info?.sla || {};

    const { name, cuisines, avgRating,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info || {};
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || {};
    
    const catogiries = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") ;
    console.log(catogiries);
    return (
        <div className="info-con">
            <h1 className="rest-name">{name}</h1>
            <div className="restaurant-info-con">
            <div className="resrtaurant-info">
                
                    <div className="ra-ca">
                        <h3 className="rating"><i className="fa-solid fa-star"></i>{avgRating}</h3>
                        <h3>{costForTwoMessage}</h3>
                    </div>
                    <h3>{cuisines.join(", ")}</h3>
                
                <div className="delivery">
                    <h3>Estimated-time: {slaString}</h3>
                </div>
            </div>
            </div>
            <div className="menu-list">
                {
                 (catogiries? (catogiries.map((cat)=>{
                        return   ( 
                        <Rescatogires key={cat?.card?.card?.title} catdata = {cat}/>
                       /* <li key={item.card.info.id}>{item.card.info.name}- Rs {item.card.info.price/100 || item?.card.info.defaultPrice/100}</li>*/
                    )
                    })):<Shimmer />)
                }
            </div>
            
        </div>
        
    );
};
export default Resmenu;