import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return(
        <FooterStyled>
            <p>Kafftejl, 2021</p>
        </FooterStyled>
    )
}

const FooterStyled = styled.footer`
    min-height: 5vh;
    text-align: center;
    /* border-top: 1px solid #f1edd3; */
    padding-top: 1rem;
    padding-bottom: 1rem;
    background-color: #f1edd3;
`

export default Footer;