export const addItem=(idx)=>{
    return {//trả ra luôn luôn là object
        type:"ADD_ITEM",
        id:idx
    };
}

////////////
export const updateQuantityItem=(idx,n)=>{
    return {//trả ra luôn luôn là object
        type:"UPDATE_QUANTITY_ITEM",
        id:idx,
        number:n
    };
}

/////////////

export const DeleteItem=(idx)=>{
    return {//trả ra luôn luôn là object
        type:"DELETE_ITEM",
        id:idx,
    };
}
////////////


export const DeleteAllItem=()=>{
    return {//trả ra luôn luôn là object
        type:"DELETE_ALL_ITEM"
    };
}