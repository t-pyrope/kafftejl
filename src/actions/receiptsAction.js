import axios from 'axios';
import {baseUrl} from '../api';

const loadRecipes = () => async(dispatch) => {
    const drinksData = await axios
        .get(baseUrl);
    dispatch({
        type: "FETCH_RECIPES",
        payload: {
            drinks: drinksData.data.drinks,
        }
    })
}
export default loadRecipes;