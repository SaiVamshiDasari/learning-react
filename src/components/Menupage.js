import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { itemImg } from "../utils/links";
import { addItem, removeItem } from "../utils/cartSlice";

const Menupage = (props) => {
    const { menudata } = props;
    const dispatch = useDispatch();

    // Get the current count of the item from the Redux store
    const itemInCart = useSelector(state => 
        state.cart.items.find(item => item.card.info.id === menudata.card?.info?.id)
    );

    // Initialize the state with the item count
    const [count, setCount] = useState(itemInCart ? itemInCart.count : 0);

    useEffect(() => {
        setCount(itemInCart ? itemInCart.count : 0);
    }, [itemInCart]);

    const handleAdd = (item) => {
        dispatch(addItem(item));
    };

    const minClick = (item) => {
        dispatch(removeItem(item));
    };

    const plusClick = (item) => {
        handleAdd(item);
    };

    return (
        <div className="page-con">
            <div key={menudata?.card?.info?.id} className="item-con">
                <p className="item-name">{menudata?.card?.info?.name}</p>
                <p className="item-price">₹ {menudata?.card?.info?.price / 100 || menudata?.card?.info?.defaultPrice / 100}</p>
                <p className="item-description">{menudata?.card?.info?.discription}</p>
            </div>
            <div className="item-img-con">
                <div className="add-con">
                    {count === 0 ? (
                        <div className="Add-btn" onClick={() => handleAdd(menudata)}>ADD</div>
                    ) : (
                        <div className="count-btn">
                            <div className="min" onClick={()=>minClick(menudata)}>-</div>
                            <div className="displayCount">{count}</div>
                            <div className="plus" onClick={() => plusClick(menudata)}>+</div>
                        </div>
                    )}
                </div>
                <div className="item-img">
                    {menudata.card?.info?.imageId ? (
                        <img src={`${itemImg}${menudata.card.info.imageId}`} alt="" />
                    ) : (
                        <div style={{ height: "10px", width: "100px" }}></div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Menupage;
