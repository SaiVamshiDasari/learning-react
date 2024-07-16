import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import resObj from "../utils/data";
import Rescard from "./Rescard";
import Shimmer from "./Shimmer";
import HorizontalScroll from "./HorizantalScroll";

const Body = () => {
    const [resList, setResList] = useState([]);
    const [filter, setFilter] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await data.json();
            const restaurants = json?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
            setResList(restaurants);
            setFilter(restaurants);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data: ", error);
            setLoading(false);
        }
    };

    const handleSearch = () => {
        const filterText = resList.filter((res) => 
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilter(filterText);
    };

   

    if (loading) {
        return <Shimmer />;
    }

    return (
        <div className="body">
            <HorizontalScroll />
            <hr className="first-seperation" />
            <div className="search-con">
                <div className="grid-titile">
                    <h1>Restaurants For You</h1>
                </div>
                <div className="search-search-logo">
                <input 
                    type="text" 
                    className="search" 
                    value={searchText} 
                    onChange={(e) => setSearchText(e.target.value)} 
                />
                    <button className="icon" onClick={handleSearch}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
                
            </div>
            <div className="body-con">
                {filter.map((restaurant) => (
                    <Link 
                        to={"./restaurants/" + restaurant?.info?.id}  
                        key={restaurant?.info?.id}
                    >
                        <Rescard resData={restaurant} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
