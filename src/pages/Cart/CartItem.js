import { useDispatch } from "react-redux";
import { DeleteItem, updateQuantityItem } from "../../action/cart";



const CartItem = (props) => {
    const { item }=props;
    const dispatchCart=useDispatch();


    //tu quy uoc voi nhau:
    //1 là công them, -1 là trừ đi
    //trên reducer nhân được con số 1 thông qua phần action
    const handePlusUp=()=>{  
        if(item.quantity<item.stock)//lấy hết hàng còn lại
            dispatchCart(updateQuantityItem(item.id,1));
    }

    const handeMinusDown=()=>{
        if(item.quantity>0)
            dispatchCart(updateQuantityItem(item.id,-1));
    }

    const handeDelete=()=>{
        dispatchCart(DeleteItem(item.id));
    }

    return (

        <div className="card__item">
            <img src={item.thumbnail} alt={item.title} />
            <div className="cart__content">
                <div className="cart__title">
                    {item.title}
                </div>
                <div className="cart__price-new">
                    {item.priceNew} $
                </div>
                <div className="cart__price-old">
                    {item.price} $
                </div>
            </div>
            <div className="cart__quantity">
                <button onClick={handeMinusDown}>-</button>
                <span className="cart__quantity-number">{item.quantity}</span>
                <button onClick={handePlusUp}>+</button>
            </div>
            <button onClick={handeDelete}>nút xóa trong cart</button>
        </div>

    )
}
export default CartItem;