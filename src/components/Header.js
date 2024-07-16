import { useSelector } from 'react-redux';
import img1 from '../utils/file.png'

import { Link } from 'react-router-dom';
const Header = ()=>{

    const cartItems = useSelector((store)=>store.cart.items);
    console.log(cartItems);
    return(
        <div className="head">
            <div className="logo-con">
                <Link to="/">
                <img className="logo" src={img1}  alt="Food" />
                </Link>
            </div>
            <div className="appname-con">
                <h1 className="appname">Food Panda</h1>
            </div>
            <div className="nav-bar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                     <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/cart"><div className='carthead'>Cart{
                        cartItems.length===0?<div></div>:<div className='cartCount'>{cartItems.length}</div>}</div></Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;