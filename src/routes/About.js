import React from 'react';
import styled from 'styled-components';
import { Container, Popup } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import Footer from '../layout/Footer';

const About = () => {
    return (
        <Container>
            <Wrapper>
                <Title>About This App</Title>
                <br />
                <Link to='/'>
                    <LogoWrap>
                        <Popup
                            content='Back to Home'
                            open
                            position='right center'
                            inverted
                            size='mini'
                            trigger={<Logo>AMDB</Logo>}
                        />
                    </LogoWrap>
                </Link>

                <SubTitle>
                    This App provides movies' details and trailers, and the
                    latest news.
                </SubTitle>
                <br />
                <Desc>
                    <em>
                        Client-Side is built with React.js and Apollo-Client.
                    </em>
                </Desc>
                <Desc>
                    <em>
                        Server-Side is built with Apollo-Server and GraphQL.
                        <br />
                        <strong>
                            Learn More about Server-Side{' '}
                            <span role='img' aria-label='finger'>
                                👉🏻
                            </span>{' '}
                            <a
                                href='https://movie-api-graphql.now.sh/'
                                target='blank'
                            >
                                Here
                            </a>
                        </strong>
                    </em>
                </Desc>
                <br />
                <br />
                <Ver>Version: 1.0.0</Ver>
            </Wrapper>
            <Footer />
        </Container>
    );
};

export default About;

// Style
const Wrapper = styled.div`
    font-family: var(--ff-secondary);
    color: white;
    margin-top: 60px;
`;
const LogoWrap = styled.div`
    display: flex;
    padding: 1.5em 0;
    text-align: left;
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
const Title = styled.div`
    font-size: var(--fs-h3);
    color: var(--clr-accent);
`;
const SubTitle = styled.p`
    font-size: var(--fs-body);
    opacity: 0.7;
`;
const Desc = styled(SubTitle)`
    font-size: var(--fs-small);
    opacity: 0.9;
`;
const Ver = styled(SubTitle)`
    font-size: var(--fs-small);
`;
