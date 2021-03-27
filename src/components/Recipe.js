import React from 'react';
import styled from 'styled-components';
import RecipeDetail from './RecipeDetail';
import {useDispatch} from 'react-redux';
import {loadDetail} from '../actions/detailAction';
import {Link} from 'react-router-dom';

const Recipe = ({name, image, id}) => {
    const dispatch = useDispatch();
    const openDetailHandler = () => {
        document.body.style.overflow = "hidden";
        dispatch(loadDetail(id));
    }

    return(
        <RecipeStyled onClick={openDetailHandler}>
            <Link to={`/recipe/${id}`}>
                <div className="header">
                    <h4>{name}</h4>
                </div>
                <div className="body">
                    <img src={image} alt="coffee"/>
                </div>
            </Link>
        </RecipeStyled>
    )
};

const RecipeStyled = styled.div`
    overflow: hidden;
    position: relative;
    cursor: pointer;
    img {
        width: 100%;
        height: 60vh;
        object-fit: cover;
        display: block;
    }
    
    /* border: 5px solid transparent; */
    border: 1px solid #e4e3d4;
    .header {
        position: absolute;
        width: 100%;
        height: 40%;
        bottom: -10%;
        background-color: rgba(0,0,0,0.6);
        transform: skewY(5deg);
        opacity: 0;
        transition: all 0.4s ease-in-out;
        h4 {
            transform: skewY(-5deg);
            text-align: center;
            padding-top: 1.3rem;
            font-size: 1.4rem;
            color: #dddac5;
        }
    }
    &:hover .header {
            opacity: 1;
            bottom: -5%;
    }

`;

export default Recipe;