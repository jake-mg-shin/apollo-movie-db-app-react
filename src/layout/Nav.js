import React from 'react';
import styled from 'styled-components';
import { Container } from 'semantic-ui-react';

const Nav = () => {
    const refreshPage = () => {
        window.location.reload();
    };

    return (
        <Container>
            {/* <Wrapper> */}
            <Navbar>
                <LogoWrap href='#' onClick={refreshPage}>
                    <Logo>M2DB</Logo>
                </LogoWrap>
                <MenuWrap>
                    <Menu>About</Menu>
                    <Menu>Movies</Menu>
                    <Menu>News</Menu>
                </MenuWrap>
            </Navbar>
            {/* </Wrapper> */}
        </Container>
    );
};

export default Nav;

const Wrapper = styled.section`
    margin: 0 auto;
    position: absolute;
`;
const Navbar = styled.div`
    background-color: black;
    opacity: 0.8;
    // padding: 0 6rem;
    position: fixed;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    z-index: 10;
    cursor: pointer;
`;
const Wrap = styled.div`
    display: flex;
    padding: 2em 0 1.5em 0;
`;
const LogoWrap = styled(Wrap)`
    text-align: left;
`;
const MenuWrap = styled(Wrap)`
    flex-direction: row;
`;
const Logo = styled.div`
    font-size: var(--fs-h3);
    font-family: 'Monoton', cursive;
    color: black;
    border: 1px solid var(--clr-accent);
    background-color: var(--clr-accent);
    border-radius: 5px;
    padding: 0.6rem;
    transition: background-color 0.2s ease-in-out;

    :hover {
        border-color: white;
        background-color: black;
        color: white;
        transition: border 0.5s ease-in-out;
    }
`;
const Menu = styled.div`
    font-size: var(--fs-body);
    font-family: var(--ff-secondary);
    color: white;
    padding: 0.4rem;
    margin-left: 3rem;
    border-bottom: 4px solid black;
    transition: border 0.2s ease-in-out;

    :hover {
        border-color: var(--clr-accent);
        transition: border 0.5s ease-in-out;
    }
`;
