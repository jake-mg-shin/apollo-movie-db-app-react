import React, { Fragment } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
import { Container, Dimmer, Loader } from 'semantic-ui-react';

import Movie from '../components/Movie';
import Cover from '../layout/Cover';
import News from '../components/News';

const GET_MOVIES = gql`
    {
        movies {
            id
            medium_cover_image
            title
            rating
            isLiked @client
        }
    }
`;

export default () => {
    const { loading, data } = useQuery(GET_MOVIES);
    // console.log(loading, data);

    return (
        <Fragment>
            {loading ? (
                <Dimmer active>
                    <Loader size='large'>Loading</Loader>
                </Dimmer>
            ) : (
                <Fragment>
                    <Cover />
                    <Bg>
                        <br />
                        <Container>
                            <Title>Don't miss these Hot Movies!</Title>
                            <br />
                            <Movies style={{ textAlign: 'center' }}>
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
                        </Container>
                    </Bg>
                </Fragment>
            )}
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
    padding: 4rem 0 3rem 0;
`;
const Movies = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 10px;
    position: relative;
`;
