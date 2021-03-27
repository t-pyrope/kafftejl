const initState = {
    drinks: []
}

const receiptsReducer = (state=initState, action) => {
    switch(action.type) {
        case "FETCH_RECIPES":
            return {
                ...state, drinks: action.payload.drinks
            }
        default:
            return {...state}
    }
}

export default receiptsReducer;