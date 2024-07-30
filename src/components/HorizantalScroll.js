
import React from 'react';
import useResData from '../utils/useResData';
import { itemImg } from '../utils/links';
import FoodShimmer from './FoodShimmer';
import { Link } from 'react-router-dom';



const HorizontalScroll = () => {
    const data = useResData();
    let info =null;
    if(data){
         info = data;
    }
    
    
    
    

    return info===null? <FoodShimmer />:(
        <div className='card1'>
        <div className="food-title"><h2 className="food-title">What's on your mind?</h2></div>
        <div className="scroll-container">
            {info?.info.map((item, index) => (
                <Link to={"./collections/"+ item.description}>
                <div className="item" key={index}>
                    <div className="food-img-con">
                    <img className="foodImage" src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/'+ item.imageId} alt='something wrong'></img></div>
                </div></Link>
            ))}
        </div>
        </div>
    );
};

export default HorizontalScroll;
