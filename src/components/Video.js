import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

export default ({ title, id }) => {
    let url = 'https://www.youtube.com/watch?v=' + id;
    // console.log(title, word);
    // console.log(url);

    return (
        <Wrapper>
            <ReactPlayer
                style={{ position: 'absolute', top: '0', left: '0' }}
                url={url}
                width='100%'
                height='100%'
                playing={false}
                controls
            />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
    padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */
`;
