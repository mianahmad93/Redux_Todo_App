export const addData = (items) => {
    return {
        type: "ADD_DATA",
        payload: items
    }
}

export const DeleteData = (id) => {
    return {
        type: "DELETE_DATA",
        payload: id
    }
}


export const UpdateData = (item, id) => {
    return {
        type: "UPDATE_DATA",
        payload: item,
        ID: id
    }
}