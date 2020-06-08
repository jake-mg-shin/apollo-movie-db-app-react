import React from 'react';
import styled from 'styled-components';
// import { Container } from 'semantic-ui-react';

const Nav = () => {
    const refreshPage = () => {
        window.location.reload();
    };

    return (
        <Container>
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
        </Container>
    );
};

export default Nav;

const Container = styled.section`
    margin: 0 auto;
    position: absolute;
`;
const Navbar = styled.div`
    background-color: black;
    opacity: 0.8;
    padding: 0 6rem;
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: auto;
    z-index: 10;
    cursor: pointer;
`;
const Wrap = styled.div`
    display: flex;
    padding: 2em 0 1.5em 0;
`;
const LogoWrap = styled(Wrap)`
    // text-align: left;
`;
const MenuWrap = styled(Wrap)`
    flex-direction: row;
`;
const Item = styled.div`
    color: white;
`;
const Logo = styled(Item)`
    border: 1px solid var(--clr-accent);
    color: black;
    background-color: var(--clr-accent);
    border-radius: 5px;
    padding: 0.6rem;
    font-size: var(--fs-h3);
    font-family: 'Monoton', cursive;
    transition: background-color 0.2s ease-in-out;

    :hover {
        // border-color: var(--clr-accent);
        // background-color: var(--clr-accent);
        border-color: white;
        background-color: black;
        color: white;
        transition: border 0.5s ease-in-out;
    }
`;
const Menu = styled(Item)`
    padding: 0.4rem;
    margin: 0 2rem;
    font-size: var(--fs-body);
    font-family: var(--ff-primary);
    border-bottom: 4px solid black;
    transition: border 0.2s ease-in-out;

    :hover {
        // border-bottom: 4px solid var(--clr-accent);
        border-color: var(--clr-accent);
        // background-color: var(--clr-accent);
        // color: black;
        transition: border 0.5s ease-in-out;
    }
`;
