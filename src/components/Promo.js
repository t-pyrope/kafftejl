import React from 'react';
import styled from 'styled-components';
import coffee from '../img/pexels-samson-katt-5256145.jpg'
const Promo = () => {
    return(
        <PromoStyled>
            <div className="parallax"></div>
            <div className="color"></div>
            <div className="promo-text">
                <h2>Let's have a wonderful day today</h2>
                <h3>Recipes for coffee coctails</h3>
            </div>
        </PromoStyled>
    )
}
const PromoStyled = styled.div`
    width: 100%;
    height: 70vh;
    position: relative;

    .parallax {
        background: url(${coffee});
        width: 100%;
        height: 100%;
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        /* background-color: rgba(0,0,0,0.4); */
    };

    .color {
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
        position: absolute;
        top: 0;
        left: 0;
    }

    .promo-text {
        position: absolute;
        top: 10%;
        left: 10%;
        margin: auto;
        color: #ecdada;
        display: flex;
        flex-direction: column;
        min-height: 20%;
        justify-content: space-between;

        h2 {
            /* font-weight: normal; */
            font-size: 2rem;
        }

        h3 {
            font-weight: lighter;
            font-size: 1.5rem;
        }
    
    @media (max-width: 1300px) {
        min-height: 15%;
    }
    }
`
export default Promo;