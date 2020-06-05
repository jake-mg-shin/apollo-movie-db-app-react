import React from 'react';
import styled from 'styled-components';

export default ({ title, url, pub, link }) => {
    return (
        <FeedWrapper href={link} target='_blank'>
            <FeedImg src={url} alt={title} />
            <Title>{title}</Title>
            <Date>{pub}</Date>
        </FeedWrapper>
    );
};

const FeedWrapper = styled.a`
    display: block;
    position: relative;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid black;
    padding: 1em;
`;
const FeedImg = styled.img`
    display: block;
    width: 100%;
    height: auto;
`;
const Title = styled.div`
    color: var(--clr-light);
    font-size: 1rem;
    font-family: var(--ff-third);
    padding: 0.5em 0;
`;
const Date = styled.div`
    color: var(--clr-accent);
    font-size: 0.8rem;
    font-family: var(--ff-forth);
    text-align: right;
    padding-bottom: 0.5em;
`;
