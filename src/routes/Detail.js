import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
import { Dimmer, Loader } from 'semantic-ui-react';

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
            isLiked @client
        }
    }
`;

export default () => {
    let { id } = useParams();
    // console.log(typeof id);
    const { loading, data } = useQuery(GET_MOVIE, {
        variables: { id: parseInt(id) },
    });
    // console.log(data);
    return (
        <Fragment>
            {loading && (
                <Dimmer active>
                    <Loader size='large'>Loading</Loader>
                </Dimmer>
            )}
            <Container>
                <Column>
                    <Title>
                        {loading
                            ? 'Loading...'
                            : `${data.movie.title} ${
                                  data.movie.isLiked ? '❤️' : ''
                              }`}
                    </Title>
                    {!loading && (
                        <>
                            <Subtitle>
                                {data?.movie?.language} | {data?.movie?.year} |{' '}
                                {data?.movie?.rating}
                            </Subtitle>
                            <Description>
                                {data?.movie?.description_intro}
                            </Description>
                        </>
                    )}
                </Column>
                <Poster bg={data?.movie?.medium_cover_image}></Poster>
            </Container>
        </Fragment>
    );
};

const Container = styled.div`
    height: 100vh;
    background-image: linear-gradient(-45deg, #d754ab, #fd723a);
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
`;
const Column = styled.div`
    margin-left: 10px;
    width: 50%;
`;
const Title = styled.h1`
    font-size: 65px;
    margin-bottom: 15px;
`;
const Subtitle = styled.h4`
    font-size: 35px;
    margin-bottom: 10px;
`;
const Description = styled.p`
    font-size: 28px;
`;
const Poster = styled.div`
    width: 25%;
    height: 60%;
    background-color: transparent;
    background-image: url(${(props) => props.bg});
    background-size: cover;
    background-position: center center;
`;
