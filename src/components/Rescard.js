import { CDN_LINK } from "../utils/links";

const Rescard = (props)=> {
    const {resData} = props;
    return(
        <div className="rescard">
            <div className="pic-con">
                <img className="pic" src={CDN_LINK + resData.info.cloudinaryImageId} />
            </div>
            <div className="res-name">{resData.info.name}</div>
            {/*<div className="cousines">{resData.info.cuisines.join(", ")}</div>*/}
            <div className="rating-eta">
                <div className="rating"><i className="fa-solid fa-star"></i>{resData.info.avgRating}</div>
                <div className="eta">{resData.info.sla.deliveryTime}mins</div>
            </div>
            
        </div>
    );
};
export default Rescard;