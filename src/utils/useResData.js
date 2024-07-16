import { useEffect, useState } from "react";
import { swiggyApi } from "./links";

const useResData = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dat = await fetch(swiggyApi);
                const jsondata = await dat.json();
                setData(jsondata.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle);
            } catch (error) {
                console.error("Error fetching data:", error);
                setData(null);
            }
        };

        fetchData();
    }, []);

    return data;
};

export default useResData;
