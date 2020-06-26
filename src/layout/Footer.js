import React from 'react';
import styled from 'styled-components';
import { Container, Icon } from 'semantic-ui-react';

export default () => {
    return (
        <Container>
            <Footer>
                <Title>
                    This Apollo Movie DB Project was built by Dev.JS with
                    React.js, Apollo, and GraphQL.
                </Title>
                <br />
                <br />
                <Text>Follow me on</Text>
                <Wrapper>
                    <a
                        href='https://www.linkedin.com/in/developer-js/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <IconWrap>
                            <Icon name='linkedin' size='big' />
                        </IconWrap>
                    </a>
                    <a
                        href='https://github.com/jake-mg-shin'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <IconWrap>
                            <Icon name='github square' size='big' />
                        </IconWrap>
                    </a>
                    <a
                        href='mailto:jake.mg.shin@gmail.com'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <IconWrap>
                            <Icon name='mail' size='big' />
                        </IconWrap>
                    </a>
                    <a
                        href='https://dev-jake-shin.now.sh/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <IconWrap>
                            <Icon name='home' size='big' />
                        </IconWrap>
                    </a>
                </Wrapper>
                <br />
                <Text>© 2020 Dev.JakeShin. All rights reserved</Text>
            </Footer>
            <br />
            <br />
        </Container>
    );
};

//  Style
const Wrapper = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
`;
const Footer = styled(Wrapper)`
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 200px;
    background-color: black;
    margin-top: 7rem;
`;
const Text = styled(Wrapper)`
    font-family: var(--ff-secondary);
    font-size: var(--fs-small);
    color: white;
    opacity: 0.7;
`;
const Title = styled(Text)`
    font-family: var(--ff-primary);
    border-bottom: 2px solid var(--clr-accent);

    :hover {
        opacity: 0.9;
    }
`;
const IconWrap = styled(Wrapper)`
    color: white;
    padding: 1rem;
    margin: 0 0.8rem;
    -webkit-transition: background 0.3s linear;
    -o-transition: background 0.3s linear;
    -webkit-transition: color 0.3s linear;
    -o-transition: color 0.3s linear;
    transition: color 0.3s linear;

    :hover {
        color: var(--clr-accent);
        -webkit-transition: color 0.5s linear;
        -o-transition: color 0.5s linear;
        transition: color 0.5s linear;
    }

    @media only screen and (max-width: 768px) {
        padding: 0.5rem;
    }
`;
