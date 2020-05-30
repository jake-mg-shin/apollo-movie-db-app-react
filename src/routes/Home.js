import React, { Fragment } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
import { Container } from 'semantic-ui-react';

import Movie from '../components/Movie';
import Cover from '../layout/Cover';

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
            <Cover />
            <br />
            <Container>
                {loading && <Loading>Loading...</Loading>}
                <Movies style={{ textAlign: 'center' }}>
                    {data?.movies?.map((m) => (
                        <Movie
                            key={m.id}
                            id={m.id}
                            isLiked={m.isLiked}
                            bg={m.medium_cover_image}
                            title={m.title}
                            rating={m.rating}
                        />
                    ))}
                </Movies>
            </Container>
        </Fragment>
    );
};

// const Container = styled.div`
//     display: flex;
//     // flex-direction: row;
//     align-items: center;
//     width: 100%;
//     margin: 0 auto;
// `;
const Loading = styled.div`
    font-size: 18px;
    opacity: 0.5;
    font-weight: 500;
    margin-top: 10px;
`;
const Movies = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 10px;
    position: relative;
`;
