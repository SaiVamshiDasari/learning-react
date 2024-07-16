import { useDispatch, useSelector } from "react-redux";
import Menupage from "./Menupage";
import { clearCart } from "../utils/cartSlice";
const Cart = ()=>{
    const dispatch = useDispatch();
    const cartItems = useSelector((store)=>store.cart.items);
    
    return(
        <div className="Cart-con">
            <h1 className="text-center font-bold m-4 p-4 ">Cart</h1>
            <div className="cart-list-con">
                {
                    cartItems.length ===0? (<div></div>):
                    cartItems.map((item)=>{
                    return(<div>
                    <Menupage menudata={item} /></div>
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