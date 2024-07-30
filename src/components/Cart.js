import { useDispatch, useSelector } from "react-redux";
import Menupage from "./Menupage";
import { itemImg } from "../utils/links";
import { clearCart } from "../utils/cartSlice";
import { addItem, removeItem } from "../utils/cartSlice";

const Cart = ()=>{
    const dispatch = useDispatch();
    const cartItems = useSelector((store)=>store.cart.items);
    
   

    const minClick = (item) => {
        dispatch(removeItem(item));
    };

    const plusClick = (item) => {
        dispatch(addItem(item));
    };
    
    return(
        <div className="Cart-con">
            <h1 className="text-center font-bold m-4 p-4 ">Cart</h1>
            <div className="cart-list-con">
                {
                    cartItems.length ===0? (<div></div>):
                    cartItems.map((item)=>{
                    return(
                        <div className="itemdisplay">
                            <div className="name-count">
                                <div className="item-count">{item.count} x</div>
                                <div className="itemName">{item.card.info.name}</div>
                            </div>
                            <div className="cart-price-con">
                                
                                        
                                    
                                
                                <div className="item-img">
                                    <p className="item-price">₹ {(item?.card?.info?.price / 100)* item.count || (item?.card?.info?.defaultPrice / 100)*item.count}</p>
                                </div>
                                <div className="cart-count-btn">
                                            <div className="min" onClick={()=>minClick(item)}>-</div>
                                            <div className="displayCount">{item.count}</div>
                                            <div className="plus" onClick={() => plusClick(item)}>+</div>
                                        </div>
                            </div>
                        </div>
                    );
                })
                    }
        </div>
            <button className="clearCart-btn" onClick={()=>{
                dispatch(clearCart());
            }}>clear cart</button>
        </div>
    );
};
export default Cart;