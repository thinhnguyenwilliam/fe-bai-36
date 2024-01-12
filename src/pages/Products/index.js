import { useEffect, useState } from "react";
import { getProductList } from "../../services/ProductServices";
import ProductItem from "../../components/ProductItem";
import "./ProductsList.css";

const Products = () => {
    const [ProductList, setProductList] = useState([]);


    useEffect(() => {
        const fetchAPI = async () => {
            const result = await getProductList();
            //console.log(result);
            setProductList(result);
        }


        fetchAPI();
    }, []);



    //console.log(ProductList);



    return (
        <>
            <h2>Danh sách sản phẩm</h2>
            {ProductList.length>0 && (
                <div className="product__list">
                    {ProductList.map(item => (
                        <ProductItem dataTransfer={item} key={item.id} />
                    ))}
                </div>
            )}
        </>
    )
}
export default Products;