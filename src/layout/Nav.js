import React from 'react';
import styled from 'styled-components';
import { Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';

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
                    <Link to={`/about`}>
                        <Menu>About</Menu>
                    </Link>
                    <AnchorLink href='#movies'>
                        <Menu>Movies</Menu>
                    </AnchorLink>
                    <AnchorLink href='#news'>
                        <Menu>News</Menu>
                    </AnchorLink>
                </MenuWrap>
            </Navbar>
        </Container>
    );
};

export default Nav;

// Style
const Navbar = styled.div`
    position: fixed;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    background-color: black;
    opacity: 0.8;
    z-index: 10;
    cursor: pointer;
`;
const Wrap = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 1.5em 0;
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
    background-color: var(--clr-accent);
    border: 1px solid var(--clr-accent);
    border-radius: 5px;
    padding: 0.6rem;
    -webkit-transition: background-color 0.2s ease-in-out;
    -o-transition: background-color 0.2s ease-in-out;
    transition: background-color 0.2s ease-in-out;

    :hover {
        border-color: white;
        background-color: black;
        color: white;
        -webkit-transition: border 0.5s ease-in-out;
        -o-transition: border 0.5s ease-in-out;
        transition: border 0.5s ease-in-out;
    }
`;
const Menu = styled.div`
    font-size: var(--fs-body);
    font-family: var(--ff-secondary);
    color: white;
    padding: 0.4rem;
    margin-left: 2.5rem;
    border-bottom: 4px solid black;
    -webkit-transition: border 0.2s ease-in-out;
    -o-transition: border 0.2s ease-in-out;
    transition: border 0.2s ease-in-out;

    :hover {
        border-color: var(--clr-accent);
        -webkit-transition: border 0.5s ease-in-out;
        -o-transition: border 0.5s ease-in-out;
        transition: border 0.5s ease-in-out;
    }

    @media only screen and (max-width: 414px) {
        margin-left: 2rem;
    }
`;
