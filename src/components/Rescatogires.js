import { useState } from "react";
import Menupage from "./Menupage";
const Rescatogires = (props)=>{
    const {catdata} = props;
    const {itemCards} = catdata?.card.card;
    const [isShown,setIsShown]= useState(true);
    const handleClick = ()=>{
        setIsShown(!isShown);
    }
    
    return (
       <div>
        <div className="seperation"></div>
        <div className="cat-con" onClick={handleClick}>
            <p className="cat">{catdata?.card?.card?.title}</p>
            <div className={`down-arrow ${isShown === true ? 'rotated' : ''}`}></div>

        </div>
        <div>{
            isShown? (itemCards.map((item)=><Menupage menudata={item} />)):''
            }</div>
        </div>
        
    )
}
export default Rescatogires;