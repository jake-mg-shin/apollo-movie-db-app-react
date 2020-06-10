import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
import { Dimmer, Loader, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import Trailers from '../components/Trailers';
import Footer from '../layout/Footer';

const GET_MOVIE = gql`
    query getMovie($id: Int!) {
        movie(id: $id) {
            id
            title
            medium_cover_image
            language
            year
            rating
            description_intro
            genres
            runtime
            mpa_rating
            isLiked @client
        }
    }
`;

export default () => {
    let { id } = useParams();

    const { loading, err, data } = useQuery(GET_MOVIE, {
        variables: { id: parseInt(id) },
    });

    if (err) return <p>An error occurred</p>;

    return (
        <Container>
            {loading && (
                <Dimmer active>
                    <Loader size='large'>Loading</Loader>
                </Dimmer>
            )}
            <Wrapper>
                <Link to='/'>
                    <LogoWrap>
                        <Logo>M2DB</Logo>
                    </LogoWrap>
                </Link>
                <br />
                <Title>Details</Title>
                {/* <SubTitle>
                    <i className='fas fa-ellipsis-v'></i> &nbsp;Our the Highest
                    Rating Movies
                </SubTitle> */}
                <br />

                <Content>
                    <Poster src={data?.movie?.medium_cover_image} />

                    {/* <Column> */}

                    {!loading && (
                        <DescWrapper>
                            <ConTitle>{data?.movie?.title}</ConTitle>
                            <ConSub>
                                {data?.movie?.mpa_rating} |{' '}
                                {data?.movie?.runtime} min |{' '}
                                {data?.movie?.language} | {data?.movie?.year} |{' '}
                                <span role='img' aria-label='rating'>
                                    ⭐️
                                </span>{' '}
                                {data?.movie?.rating}
                            </ConSub>
                            <Description>
                                {data?.movie?.description_intro}
                            </Description>
                        </DescWrapper>
                    )}
                    {/* </Column> */}
                </Content>
                <br />
                <br />
                <br />
                <Title>Trailer</Title>
                {/* <SubTitle>
                    <i className='fas fa-ellipsis-v'></i> &nbsp;Our the Highest
                    Rating Movies
                </SubTitle> */}
                <br />

                <Trailers title={data?.movie?.title} />
                <Source>
                    <em>
                        Source:{' '}
                        <a
                            href='https://developers.google.com/youtube/v3'
                            target='_black'
                        >
                            https://developers.google.com/youtube/v3
                        </a>
                    </em>
                </Source>
                <Footer />
                <br />
                <br />
            </Wrapper>
        </Container>
    );
};

// Style
const Wrapper = styled.div`
    font-family: var(--ff-secondary);
    color: white;
    margin-top: 30px;
`;
const LogoWrap = styled.div`
    display: flex;
    padding: 2em 0 1.5em 0;
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
    font-family: var(--ff-secondary);
    font-size: var(--fs-h3);
    color: var(--clr-accent);
    padding: 1rem 0 1rem 0;
`;
const SubTitle = styled.div`
    font-family: var(--ff-primary);
    font-size: var(--fs-body);
    color: white;
`;

const Content = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem;
    border: 1px solid white;
    box-shadow: 1px 1px 0px #999, 2px 2px 0px #999, 3px 3px 0px #999,
        4px 4px 0px #999, 5px 5px 0px #999;
`;
const Poster = styled.img`
    display: flex;
    width: 25%;
    height: auto;
    // padding: 2em 0;
`;
const DescWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    // padding-left: 2em;
`;
const ConTitle = styled.h1`
    font-size: var(--fs-h3);
    padding: 10px;
`;
const ConSub = styled.div`
    font-size: var(--fs-body);
    margin-bottom: 10px;
    padding: 10px;
`;
const Description = styled.p`
    font-size: 15px;
    padding: 10px;
`;

// const Column = styled.div`
//     margin-left: 10px;
//     width: 50%;
// `;

const Source = styled.div`
    color: white;
    opacity: 0.8;
    text-align: right;
`;
