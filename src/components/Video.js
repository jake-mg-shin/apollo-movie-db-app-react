import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import { Message } from 'semantic-ui-react';

export default ({ title, id }) => {
    let url = 'https://www.youtube.com/watch?v=' + id;

    return (
        <Wrapper>
            {id ? (
                <ReactPlayer
                    style={{ position: 'absolute', top: '0', left: '0' }}
                    url={url}
                    width='100%'
                    height='100%'
                    playing={false}
                    controls
                />
            ) : (
                <Message
                    negative
                    floating
                    style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                    }}
                >
                    <Message.Header>
                        Sorry! The Daily limit of YouTube Data API V3 is
                        exceeded.
                    </Message.Header>
                    <p>Trailer will be back, please try again later.</p>
                </Message>
            )}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
    padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */
`;
