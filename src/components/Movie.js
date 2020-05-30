import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { Card, Image } from 'semantic-ui-react';

const LIKE_MOVIE = gql`
    mutation toggleLikeMovie($id: Int!, $isLiked: Boolean!) {
        toggleLikeMovie(id: $id, isLiked: $isLiked) @client
    }
`;

export default ({ id, bg, title, rating, isLiked }) => {
    const [toggleMovie] = useMutation(LIKE_MOVIE, {
        variables: { id: parseInt(id), isLiked },
    });
    return (
        <Link to={`/${id}`}>
            <Card style={{ width: '100%' }}>
                <Image src={bg} />
                <div
                    style={{
                        display: 'flex',
                        height: '70px',
                        // alignItems: 'flexStart',
                        // justifyContent: 'flexStart',
                        // textAlign: 'center',
                        padding: '0 5px',
                        // margin: 'auto',
                    }}
                >
                    <Content>
                        <div
                            style={
                                {
                                    // display: 'flex',
                                    // justifyContent: 'flexStart',
                                    // textAlign: 'left',
                                }
                            }
                        >
                            <span role='img' aria-label='rating'>
                                ⭐️
                            </span>
                            {rating}
                        </div>
                        {/* <div>
                            <button
                                onClick={toggleMovie}
                                style={{ zIndex: '10' }}
                            >
                                {isLiked ? 'Unlike' : 'Like'}
                            </button>
                        </div> */}
                        <div
                            style={
                                {
                                    // display: 'flex',
                                    // justifyContent: 'flexEnd',
                                    // textAlign: 'right',
                                }
                            }
                        >
                            {title}
                        </div>
                    </Content>
                </div>
            </Card>
        </Link>
    );
};

const Content = styled.div`
    display: flex;
    flex-direction: column;
    // justify-content: flex-start;
    // margin: 1em auto;
`;

// const Container = styled.div`
//     height: 400px;
//     border-radius: 7px;
//     width: 100%;
//     box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
//     background-color: transparent;
// `;
// const Poster = styled.div`
//     background-image: url(${(props) => props.bg});
//     height: 100%;
//     width: 100%;
//     background-size: cover;
//     background-position: center center;
//     border-radius: 7px;
// `;
