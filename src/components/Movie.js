import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
// import { Card, Image, Icon } from 'semantic-ui-react';

const LIKE_MOVIE = gql`
    mutation LikeMovie($id: Int!, $isLiked: Boolean!) {
        LikeMovie(id: $id, isLiked: $isLiked) @client
    }
`;

export default ({ id, bg, rating, isLiked }) => {
    const [LikeMovie] = useMutation(LIKE_MOVIE, {
        variables: { id: parseInt(id), isLiked },
    });

    return (
        <MovieWrapper>
            <Link to={`/movie/${id}`}>
                <Poster src={bg} />
            </Link>
            <Content>
                <Rating>
                    <span role='img' aria-label='rating'>
                        ⭐️
                    </span>
                    {rating}
                </Rating>
                <Like>
                    <div
                        onClick={LikeMovie}
                        style={{ zIndex: '10', backgroundColor: 'black' }}
                    >
                        {isLiked ? (
                            <i
                                className='fas fa-heart'
                                style={{ color: 'red' }}
                            ></i>
                        ) : (
                            <i
                                className='far fa-heart'
                                style={{ color: 'red' }}
                            ></i>
                        )}
                    </div>
                </Like>
            </Content>
        </MovieWrapper>
    );
};

const MovieWrapper = styled.div`
    display: block;
    position: relative;
    width: 100%;
    box-sizing: border-box;
    padding: 1em 0;
`;
const Poster = styled.img`
    // background-image: url(${(props) => props.bg});
    height: auto;
    width: 100%;
    // background-size: cover;
    // background-position: center;
`;
const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.5rem;
    font-size: 16px;
`;
const Rating = styled.div`
    color: white;
`;
const Like = styled.div`
    background-color: black;
`;

// const Container = styled.div`
//     height: 400px;
//     border-radius: 7px;
//     width: 100%;
//     box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
//     background-color: transparent;
// `;
