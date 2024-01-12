import { get } from "../Utils/request";

export const getProductList  = async ()=>{  
    const result = await get("/products");

    return result;
}

////////////
export const getProduct  = async (idx)=>{  
    const result = await get(`/products/${idx}`);

    return result;
}
