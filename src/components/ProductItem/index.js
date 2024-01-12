import { useDispatch } from "react-redux";
import { addItem } from "../../action/cart";

const ProductItem = (props) => {
    const { dataTransfer } = props;
    const dispatchCart=useDispatch();

    //toFixed(0): không lấy số nào sau dấu thập phân
    const priceNew=(dataTransfer.price*(100-dataTransfer.discountPercentage)/100).toFixed(0);


    const handleAddToCart =()=>{
        //console.log(dataTransfer.id);
        dispatchCart(addItem(dataTransfer.id));
    }


    return (
        <>
            <div className="product__item">  
                <img src={dataTransfer.thumbnail} alt={dataTransfer.title} />
                <h4>{dataTransfer.title}</h4>
                <p className="product__price-new">Giá {priceNew}$</p>
                <p className="product__price-old">Giá {dataTransfer.price}$</p>
                <p className="product__discount">Giảm {dataTransfer.discountPercentage}%</p>
                <button onClick={handleAddToCart}>Thêm vào giỏ hàng</button>
            </div>
        </>
    )
}
export default ProductItem;