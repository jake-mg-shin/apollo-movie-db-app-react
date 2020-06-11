import React from 'react';
import styled from 'styled-components';

export default ({ title, url, pub, link }) => {
    return (
        <FeedWrapper href={link} target='_blank'>
            <FeedImg src={url} alt={title} />
            <Title>{title}</Title>
            <Date>{pub}</Date>
            <br />
        </FeedWrapper>
    );
};

// Style
const FeedWrapper = styled.a`
    position: relative;
    display: block;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid black;
`;
const FeedImg = styled.img`
    display: block;
    width: 100%;
    height: auto;
`;
const Title = styled.div`
    font-family: var(--ff-primary);
    color: var(--clr-light);
    font-size: 1rem;
    padding: 0.5em 0;
    opacity: 0.8;
`;
const Date = styled(Title)`
    color: var(--clr-accent);
    font-size: 0.8rem;
    text-align: right;
    padding-bottom: 0.5em;
`;
