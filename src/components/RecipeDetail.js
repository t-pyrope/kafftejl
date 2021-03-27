import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import {loadDetail} from '../actions/detailAction';
import {useHistory} from 'react-router-dom';
import {motion} from 'framer-motion';
import {fade} from '../animation';
import {Line} from '../styles';

const RecipeDetail = ({id}) => {
    const {drink, isLoading} = useSelector(state => state.detail);
    const history = useHistory();

    const exitDetailHandler = (e) => {
        if(e.target.classList.contains("wrapper")) {
            document.body.style.overflow = "auto";
            history.push("/")
        }
    }

    return(
        <>
        {!isLoading && (
            <Wrapper className="wrapper" onClick={exitDetailHandler}>
                <Detail variants={fade} initial="hidden" animate="show" exit="exit">
                    <Promo>
                    <img src={drink[0].strDrinkThumb}></img>
                    </Promo>
                    <BasicInfo>
                        <h3>{drink[0].strDrink}</h3>
                        <Line />
                        <div>
                            <p>{drink[0].strAlcoholic}</p>
                        </div>
                    </BasicInfo>
                    <Info>
                        <Ingredients>
                            <h4>Ingredients</h4>
                            <div>
                            {drink[0].strIngredient1 ? <p>{drink[0].strIngredient1}</p>: ""}
                            {drink[0].strIngredient2 ? <p>{drink[0].strIngredient2}</p>: ""}
                            {drink[0].strIngredient3 ? <p>{drink[0].strIngredient3}</p>: ""}
                            {drink[0].strIngredient4 ? <p>{drink[0].strIngredient4}</p>: ""}
                            {drink[0].strIngredient5 ? <p>{drink[0].strIngredient5}</p>: ""}
                            {drink[0].strIngredient6 ? <p>{drink[0].strIngredient6}</p>: ""}
                            {drink[0].strIngredient7 ? <p>{drink[0].strIngredient7}</p>: ""}
                            </div>
                        </Ingredients>
                        <Ingredients>
                            <h4>How to prepare</h4>
                            {drink[0].strInstructions.split(".").map((sent) => (
                                <p>{sent}</p>
                            ))}
                        </Ingredients>
                    </Info>
                </Detail>
            </Wrapper>
        )}
        </>
    )
};

const Wrapper = styled.div`
    position: fixed;
    background-color: rgba(0,0,0,0.1);
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem 0rem;
    overflow-y: scroll;
`

const Detail = styled(motion.div)`
    background-color: #FFFCE9;
    width: 80%;
    margin: auto;
    border-radius: 0.5rem;
    overflow: hidden;

`

const BasicInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-height: 14vh;

    div {
        display: flex;
        justify-content: space-evenly;
    }

    h3 {
        font-size: 1.5rem;
    }
`


const Ingredients = styled.div`
    flex-basis: 40%;
    div {
        display: flex;
        flex-direction: column;
    }
    p {
        margin: 0.2rem 0.2rem 0.2rem 0rem;
    }

    h4 {
        border-bottom: 1px solid #E5E2D1;
        margin-bottom: 0.2rem;
    }

    @media (max-width: 1024px) {
        margin-bottom: 1rem;
    }
`

const Info = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1rem 10% 1.5rem 10%;

    @media (max-width: 1024px){
        display: block;
    }
`

const Promo = styled.div`
    width: 100%;
    height: 50vh;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    margin-bottom: 1rem;
`

export default RecipeDetail;