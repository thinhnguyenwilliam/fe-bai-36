//khi sửa code ở reduer tự động load lại data

const initCart = [];

export const cartReducer = (state = initCart, action) => {
    const newState = [...state];


    switch (action.type) {
        case "ADD_ITEM":
            const existItem = newState.findIndex(item => item.id === action.id);
            //console.log(existItem);//nếu kg có trả ra -1, tìm index phần tử đầu tiên thui bắt dầu từ 0
            if (existItem === -1) {
                newState.push({
                    id: action.id,
                    quantity: 1
                });
            }
            else {
                ++newState[existItem].quantity;
            }
            //console.log(newState);
            return newState;

        case "UPDATE_QUANTITY_ITEM":
            const indexItemUpdate = newState.findIndex(item => item.id === action.id);
            newState[indexItemUpdate].quantity+=action.number;
            return newState;

        case "DELETE_ITEM":
            return newState.filter(item =>item.id!== action.id);

        case "DELETE_ALL_ITEM":
            return [];

        default:
            return state;
    }
}