const Initial_State = {
    data: []
}

export const TodoReducer = (state = Initial_State, action) => {
    switch (action.type) {
        case "ADD_DATA":
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        case "DELETE_DATA":
            const DeleteData = state.data.filter((item, ind) => ind !== action.payload)

            return {
                ...state,
                data: DeleteData
            }

        case "UPDATE_DATA":
            const Update = state.data.map((item, ind) => ind == action.ID ? action.payload : item)
            return {
                ...state,
                data: Update
            }
            
        default:
            return state;
    }
}