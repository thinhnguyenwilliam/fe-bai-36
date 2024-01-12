//dùng để chứa tất cả reducer, hợp nhất lại

import { combineReducers } from "redux";
import { cartReducer } from "./cart";


export const allReducers=combineReducers({
    cartReducer,
    //thêm các reducer vào đây
}); 