import useResData from "../utils/useResData";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Rescard from "./Rescard";
import Shimmer from "./Shimmer";
const Collections = () => {
    const { collectionName } = useParams();
    const collName = collectionName.replace(/\s+/g, '');
    const [resList, setResList] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);
    

    const fetchData = async () => {
        try {
            const response = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&collection=80440&tags=layout_CCS_${collName}&sortBy=&filters=&type=rcv2&offset=0&page_type=null`);
            const json = await response.json();
            await handleFilter(json.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    const handleFilter =(json)=>{
        const filteredData = json?.cards?.filter(item => item?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant");
        setResList(filteredData);
        
        
    }
    console.log(resList);
    return (
        <div className="body">
            <h1 className="coll-title">{collectionName}</h1>
        <div className="body-con">
            
            {resList && resList.length > 0 ? (
                resList.map((item, index) => (
                    <Link to={"/restaurants/"+item?.card?.card?.info?.name}>
                    <div className="body" key={index}>
                        <Rescard resData={item?.card?.card}/>
                    </div></Link>
                ))
            ) : (
                <Shimmer/>
            )}
        </div></div>
    );
};

export default Collections;
