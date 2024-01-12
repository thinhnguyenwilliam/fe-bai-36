//thực tế trang giỏ hàng data lưu vào local storage
//nhưng vì đang học nên data lưu vào redux để học cách share data
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../services/ProductServices";
import "./cart.css";
import CartItem from "./CartItem";
import { DeleteAllItem } from "../../action/cart";

const Cart = () => {
    const [listCart, setlistCart] = useState([]);
    const [totalPrice,settotalPrice]=useState(0);
    const ArrCart = useSelector(state => state.cartReducer);//lấy state từ hàm cartReducer trong reduce
    //console.log(ArrCart);
    const dispatchCart=useDispatch();

    let total=0;



    useEffect(() => {
        const fetchAPI = async () => {
            const dataFinal = [];
            for (const item of ArrCart) {
                const infoItem = await getProduct(item.id);

                const GiaTienMoi=(infoItem.price*(100-infoItem.discountPercentage)/100).toFixed(0);

                dataFinal.push({
                    ...infoItem,
                    quantity: item.quantity,
                    priceNew:GiaTienMoi
                });

                total+=GiaTienMoi*item.quantity;
            }

            setlistCart(dataFinal);
            settotalPrice(total);
        }


        fetchAPI();
    }, [ArrCart]);
    //console.log(listCart);


    const handleDeleteAll=()=>{
        dispatchCart(DeleteAllItem());
    }

    return (
        <>
            <h2>Trang giỏ hàng</h2>


            <button onClick={handleDeleteAll} >nút xóa tất cả</button>
            {listCart.length > 0 && (
                <>
                    <div className="cart__list">
                        {listCart.map(item1 => (
                            // map thi phai có key đi cùng
                            <CartItem item={item1} key={item1.id} />
                        ))}

                    </div>


                    <div className="cart__total-price">
                        Tổng tiền: <span>{totalPrice}$</span>
                    </div>
                </>
            )}
        </>
    )
}
export default Cart;