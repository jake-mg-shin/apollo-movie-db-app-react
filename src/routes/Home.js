import React, { Fragment } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
import { Dimmer, Loader, Container } from 'semantic-ui-react';

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
    const { loading, err, data } = useQuery(GET_MOVIES, {
        variables: { limit: parseInt(15) },
    });

    if (err) return <p>An error occurred</p>;

    return (
        <Fragment>
            {loading ? (
                <Dimmer active>
                    <Loader size='large'>Loading</Loader>
                </Dimmer>
            ) : (
                <Fragment>
                    <Nav />
                    <Cover />

                    <Bg>
                        <Container>
                            <br id='movies' />
                            <Title>Movies</Title>
                            <SubTitle>
                                <i className='fas fa-ellipsis-v'></i> &nbsp;Our
                                the Highest Rating Movies
                            </SubTitle>
                            {/* <br /> */}
                            <Movies>
                                {data?.movies?.map((m, i) => (
                                    <Movie
                                        key={i}
                                        id={m.id}
                                        bg={m.medium_cover_image}
                                        title={m.title}
                                        rating={m.rating}
                                        isLiked={m.isLiked}
                                    />
                                ))}
                            </Movies>
                            <Source>
                                <em>
                                    Source:{' '}
                                    <a
                                        href='https://yts.mx/api'
                                        target='_black'
                                    >
                                        https://yts.mx/api
                                    </a>
                                </em>
                            </Source>
                            <br />
                            <br />
                            <Title id='news'>News</Title>
                            <SubTitle>
                                <i className='fas fa-ellipsis-v'></i>{' '}
                                &nbsp;Latest News
                            </SubTitle>
                            <br />
                            <News />
                            <Source>
                                <em>
                                    Source:{' '}
                                    <a
                                        href='https://movieweb.com/rss/'
                                        target='_black'
                                    >
                                        https://movieweb.com/rss/
                                    </a>
                                </em>
                            </Source>
                            <Footer />
                            <br />
                            <br />
                        </Container>
                    </Bg>
                </Fragment>
            )}
        </Fragment>
    );
};

// Style
const Bg = styled.div`
    background-color: black;
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
    color: white;
`;

const Movies = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    margin: 0 auto;
    grid-auto-flow: row dense;
    max-width: 1400px;

    @media only screen and (max-width: 1024px) {
        -ms-grid-columns: (1fr) [4];
        grid-template-columns: repeat(4, 1fr);
        // max-width: 1000px;
        margin-top: 3em;
    }
    @media only screen and (max-width: 768px) {
        -ms-grid-columns: (1fr) [3];
        grid-template-columns: repeat(3, 1fr);
        // max-width: 600px;
        margin-top: 1em;
    }
`;
const Source = styled.div`
    color: white;
    opacity: 0.8;
    text-align: right;
`;
