import React, { Fragment } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
import { Dimmer, Loader, Container, Icon } from 'semantic-ui-react';

import Nav from '../layout/Nav';
import Movie from '../components/Movie';
import Cover from '../layout/Cover';
import News from '../components/News';
import Footer from '../layout/Footer';

const GET_MOVIES = gql`
    query getMovies($limit: Int!) {
        movies(limit: $limit) {
            id
            medium_cover_image
            title
            rating
            isLiked @client
        }
    }
`;

export default () => {
    const { loading, error, data } = useQuery(GET_MOVIES, {
        variables: { limit: parseInt(15) },
    });

    if (loading)
        return (
            <Dimmer active>
                <Loader size='large'>Loading</Loader>
            </Dimmer>
        );
    if (error) return <p>An error occurred</p>;

    return (
        <Fragment>
            <Nav />
            <Cover />
            <Bg>
                <Container>
                    <br id='movies' />
                    <Title>Movies</Title>
                    <SubTitle>
                        <Icon name='ellipsis vertical' />
                        &nbsp;Best-Rated Movies
                    </SubTitle>
                    {!loading && (
                        <Movies>
                            {data?.movies?.map((movie, index) => (
                                <Movie
                                    key={index}
                                    id={movie.id}
                                    bg={movie.medium_cover_image}
                                    title={movie.title}
                                    rating={movie.rating}
                                    isLiked={movie.isLiked}
                                />
                            ))}
                        </Movies>
                    )}
                    <br />
                    <Source>
                        <em>
                            Source:{' '}
                            <a href='https://yts.mx/api' target='_black'>
                                https://yts.mx/api
                            </a>
                        </em>
                    </Source>
                    <br />
                    <br />
                    <Title id='news'>News</Title>
                    <SubTitle>
                        <Icon name='ellipsis vertical' />
                        &nbsp;Latest Movie News
                    </SubTitle>
                    <br />
                    <News />
                    <br />
                    <Source>
                        <em>
                            Source:{' '}
                            <a href='https://movieweb.com/rss/' target='_black'>
                                https://movieweb.com/rss/
                            </a>
                        </em>
                    </Source>
                </Container>
            </Bg>
            <Footer />
        </Fragment>
    );
};

// Style
const Bg = styled.div`
    background-color: black;
    color: white;
`;
const Title = styled.div`
    font-family: var(--ff-secondary);
    font-size: var(--fs-h3);
    color: var(--clr-accent);
    padding: 4rem 0 1rem 0;
`;
const SubTitle = styled.div`
    font-family: var(--ff-primary);
    font-size: var(--fs-body);
`;
const Movies = styled.div`
    position: relative;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: (1fr) [5];
    grid-template-columns: repeat(5, 1fr);
    margin: 0 auto;
    grid-auto-flow: row dense;
    max-width: 1400px;

    @media only screen and (max-width: 1024px) {
        -ms-grid-columns: (1fr) [4];
        grid-template-columns: repeat(4, 1fr);
        margin-top: 3em;
    }
    @media only screen and (max-width: 768px) {
        -ms-grid-columns: (1fr) [3];
        grid-template-columns: repeat(3, 1fr);
        margin-top: 1em;
    }
    @media only screen and (max-width: 414px) {
        -ms-grid-columns: (1fr) [2];
        grid-template-columns: repeat(2, 1fr);
        margin-top: 1em;
    }
`;
const Source = styled.div`
    text-align: right;
    opacity: 0.8;
`;
