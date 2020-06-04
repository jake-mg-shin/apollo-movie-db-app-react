import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
import { Dimmer, Loader, Container } from 'semantic-ui-react';

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
    const { loading, err, data } = useQuery(GET_MOVIE, {
        variables: { id: parseInt(id) },
    });
    console.log(data);
    // const like = data.movie;
    // console.log(like);

    if (err) return <p>An error occurred</p>;

    return (
        <Fragment>
            {loading && (
                <Dimmer active>
                    <Loader size='large'>Loading</Loader>
                </Dimmer>
            )}
            <Container style={{ color: 'white' }}>
                <Content>
                    <Poster src={data?.movie?.medium_cover_image} />

                    {/* <Column> */}
                    {/* `${
                        data.movie.isLiked ? 'You like this movie' : ''
                    }`} */}
                    {!loading && (
                        <DescWrapper>
                            <Title>{data?.movie?.title}</Title>
                            <Subtitle>
                                {data?.movie?.year} | {data?.movie?.language} |{' '}
                                <span role='img' aria-label='rating'>
                                    ⭐️
                                </span>{' '}
                                {data?.movie?.rating}
                            </Subtitle>
                            <Description>
                                {data?.movie?.description_intro}
                            </Description>
                        </DescWrapper>
                    )}
                    {/* </Column> */}
                </Content>
            </Container>
        </Fragment>
    );
};

const Content = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
`;
const Poster = styled.img`
display: flex;
    width: 100%
    height: auto;
    padding: 2em 0;
`;
const DescWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    padding: 2em;
`;
const Title = styled.h1`
    font-size: var(--fs-h3);
    padding: 10px;
`;
const Subtitle = styled.div`
    font-size: var(--fs-body);
    margin-bottom: 10px;
    padding: 10px;
`;
const Description = styled.p`
    font-size: 15px;
    padding: 10px;
`;

// const Container = styled.div`
//     height: 100vh;
//     background-image: linear-gradient(-45deg, #d754ab, #fd723a);
//     width: 100%;
//     display: flex;
//     justify-content: space-around;
//     align-items: center;
//     color: white;
// `;
// const Column = styled.div`
//     margin-left: 10px;
//     width: 50%;
// `;
