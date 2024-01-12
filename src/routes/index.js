import LayoutDefault from "../layouts/LayoutDefault";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Products from "../pages/Products";


export const routes=[
    {
        path:"/",
        element:<LayoutDefault />,
        children: [
            {
                index:true,
                element:<Home />
            },
            {
                path:"product",
                element:<Products />
            },
            {
                path:"cart",
                element:<Cart />
            }
        ]
    }
];







