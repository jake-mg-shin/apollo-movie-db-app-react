import React, { Fragment } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
// import { Dimmer, Loader } from 'semantic-ui-react';

import Movie from '../components/Movie';
import Cover from '../layout/Cover';
import News from '../components/News';

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
        variables: { limit: parseInt(10) },
    });
    // console.log(loading, data);

    if (err) return <p>An error occurred</p>;

    return (
        <Fragment>
            {/* {loading ? (
                <Dimmer active>
                    <Loader size='large'>Loading</Loader>
                </Dimmer>
            ) : (
                <Fragment> */}
            <Cover />
            <Bg>
                <br />
                <Title>Our the Highest Rating Movies</Title>
                <br />
                <Movies>
                    {data?.movies?.map((m) => (
                        <Movie
                            key={m.id}
                            id={m.id}
                            bg={m.medium_cover_image}
                            title={m.title}
                            rating={m.rating}
                            isLiked={m.isLiked}
                        />
                    ))}
                </Movies>
                <br />
                <Title>Latest News</Title>
                <br />
                <News />
            </Bg>
            {/* </Fragment>
            )} */}
        </Fragment>
    );
};

const Bg = styled.div`
    background-color: black;
`;
const Title = styled.div`
    color: white;
    font-size: var(--fs-h3);
    font-family: var(--ff-secondary);
    padding: 4rem 3rem 3rem 3rem;
`;
const Movies = styled.div`
    display: grid;
    position: relative;
    grid-template-columns: repeat(5, 1fr);
    padding: 0 6rem;
    // grid-gap: 10px;
`;
