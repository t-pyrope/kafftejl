import axios from 'axios';
import {recipeDetailURL} from '../api';

export const loadDetail = (recipe_id) => async (dispatch) => {
    dispatch({
        type: "LOADING_DETAIL",
    })

    const detailData = await axios.get(recipeDetailURL(recipe_id));

    dispatch({
        type: "GET_DETAIL",
        payload: {
            recipe: detailData.data.drinks
        }
    })
}