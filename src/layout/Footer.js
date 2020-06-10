import React from 'react';
import styled from 'styled-components';

export default () => {
    return (
        <Wrapper>
            <Title>
                This is MyMovieDB Project, is built by Dev.JS with React.js,
                Apollo, and GraphQL.
            </Title>
            <br />
            <br />
            <Text>Follow me on</Text>
            <IconWrap>
                <a
                    href='https://www.linkedin.com/in/developer-js/'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <Icon className='fab fa-linkedin' />
                </a>
                <a
                    href='https://github.com/jake-mg-shin'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <Icon className='fab fa-github-square' />
                </a>
                <a
                    href='mailto:jake.mg.shin@gmail.com'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <Icon className='fas fa-envelope' />
                </a>
                <a
                    href='https://dev-jake-shin.now.sh/'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <Icon className='fas fa-home' />
                </a>
            </IconWrap>
            <br />
            <Text>© 2020 Dev.JakeShin. All rights reserved</Text>
        </Wrapper>
    );
};

//  Style
const Wrapper = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
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
const IconWrap = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: 0 auto;
    // padding: 1rem;

    @media only screen and (max-width: 768px) {
        padding: 0.5rem;
        padding-top: 7rem;
    }
`;
const Icon = styled.i`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 1.7em;
    color: white;
    padding: 1rem;
    margin: 0 0.8rem;
    background-color: black;
    -webkit-transition: background 0.3s linear;
    -o-transition: background 0.3s linear;
    transition: color 0.3s linear;
    :hover {
        color: var(--clr-accent);
        transition: color 0.5s linear;
    }
    @media only screen and (max-width: 768px) {
        padding: 0.5rem;
    }
`;
const Text = styled.div`
    display: flex;
    font-family: var(--ff-secondary);
    font-size: var(--fs-small);
    color: white;
    opacity: 0.85;
`;
const Title = styled(Text)`
    font-family: var(--ff-primary);
    border-bottom: 2px solid var(--clr-accent);
    :hover {
        opacity: 1;
    }
`;
