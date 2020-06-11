import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { Icon } from 'semantic-ui-react';

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
        <Wrapper>
            <MovieWrapper>
                <Link to={`/movie/${id}`}>
                    <Poster src={bg} />
                    <Overlay>
                        <Button>Learn More</Button>
                    </Overlay>
                </Link>
            </MovieWrapper>
            <Content>
                <Rating>
                    <span role='img' aria-label='rating'>
                        ⭐️
                    </span>{' '}
                    {rating}
                </Rating>
                <Like>
                    <div
                        onClick={LikeMovie}
                        style={{ zIndex: '10', backgroundColor: 'black' }}
                    >
                        {isLiked ? (
                            <Icon name='heart' color='red' />
                        ) : (
                            <Icon name='heart outline' color='red' />
                        )}
                    </div>
                </Like>
            </Content>
        </Wrapper>
    );
};

// Style
const Wrapper = styled.div`
    display: block;
    position: relative;
`;
const MovieWrapper = styled(Wrapper)`
    width: 100%;
    box-sizing: border-box;
    padding-top: 1.5em;

    :hover {
        cursor: pointer;
    }
`;
const Overlay = styled(Wrapper)`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: auto;
    opacity: 0;
    -webkit-transition: 0.5s ease;
    -o-transition: 0.5s ease;
    transition: 0.5s ease;

    :hover {
        opacity: 0.7;
        background-color: black;
    }
`;
const Button = styled(Wrapper)`
    position: absolute;
    top: 50%;
    left: 50%;
    font-weight: bold;
    color: white;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
    border: 1px solid white;
    border-radius: 5px;
    padding: 5px;
    -webkit-transition: background-color 0.2s ease-in-out;
    -o-transition: background-color 0.2s ease-in-out;
    transition: background-color 0.2s ease-in-out;

    :hover {
        color: black;
        background-color: white;
        -webkit-transition: background-color 0.5s ease-in-out;
        -o-transition: background-color 0.5s ease-in-out;
        transition: background-color 0.5s ease-in-out;
    }
`;
const Poster = styled.img`
    width: 100%;
    height: auto;
`;
const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.5rem;
    font-size: 16px;
    width: 100%;
    height: auto;
`;
const Rating = styled.div``;
const Like = styled.div`
    background-color: black;

    :hover {
        cursor: pointer;
    }
`;
