const initialState = { drinks: {}, isLoading: true};

const detailReducer = (state=initialState, action) => {
    switch(action.type) {
        case "GET_DETAIL":
            return{
                ...state,
                drink: action.payload.recipe, isLoading: false
            }
        case "LOADING_DETAIL":
            return{
                ...state,
                isLoading: true
            }
        default:
            return{...state}
    }
}

export default detailReducer;