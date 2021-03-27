import React, { useEffect } from 'react';
import loadRecipes from '../actions/receiptsAction';
import {useDispatch, useSelector} from 'react-redux';
import Recipe from '../components/Recipe';
import styled from 'styled-components';
import RecipeDetail from '../components/RecipeDetail';
import {useLocation} from 'react-router-dom';
import {Line} from '../styles'

const Home = () => {
    const location = useLocation();
    const pathId = location.pathname.split("/")[2];
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadRecipes())
    }, [dispatch]);

    const {drinks} = useSelector(state => state.receipts);

    return(
        <HomeStyled>
            
            {pathId && <RecipeDetail />}
            <h2>Recipes</h2>
            <Line />
            <Drinks>
                {drinks.map((drink) => (
                    <Recipe name={drink.strDrink} image={drink.strDrinkThumb} key={drink.idDrink} id={drink.idDrink}/>
                ))}
            </Drinks>
        </HomeStyled>
    )
};

const HomeStyled = styled.div`
    width: 80%;
    margin: 3rem auto 3rem auto;

    h2 {
        text-align: center;
        margin: 1rem auto ;
    }
`

const Drinks = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
    margin: 1rem 0rem;
`

export default Home;