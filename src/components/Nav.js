import React from 'react';
import styled from 'styled-components';


const Nav = () => {
    return(
        <NavStyled>
            <h1>Kafftejl</h1>
        </NavStyled>
    )
};

const NavStyled = styled.nav`
    min-height: 13vh;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        text-transform: uppercase;
    }
`

export default Nav;