//mục dich react là chia nhỏ component ra để tái sử dụng component

import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const MiniCart=()=>{
    const cart=useSelector(state=>state.cartReducer);


    return(
        <>
            <NavLink to="/cart">Giỏ hàng ({cart.length})</NavLink>
        </>
    )
}
export default MiniCart;