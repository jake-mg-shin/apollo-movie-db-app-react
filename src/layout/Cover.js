import React, { Fragment } from 'react';
import styled, { keyframes } from 'styled-components';

const Cover = () => {
    return (
        <BgImage>
            <ScreenWrap>
                <Wrap2>
                    <Text>Don't miss out!</Text>
                    <Text>Experience a special Movie DB for you</Text>
                    <CoverTitle>My Movie DB</CoverTitle>
                </Wrap2>
            </ScreenWrap>
        </BgImage>
    );
};

export default Cover;

const BgImage = styled.div`
    background-image: url('https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80');
    width: 100%;
    height: 800px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

    @media only screen and (max-width: 1024px) {
        height: 700px;
    }
    @media only screen and (max-width: 768px) {
        height: 600px;
    }
    @media only screen and (max-width: 414px) {
        height: 500px;
    }
`;
const slideFade = keyframes`
100% {
    opacity: 0.8;
}
`;
const ScreenWrap = styled.div`
    top: 18%;
    left: 57%;
    opacity: 0;
    z-index: 1;
    color: white;
    animation: 2s ${slideFade} 1s forwards;

    position: relative;
    perspective: 200px;
    width: 400px;
    height: 250px;
    display: flex;

    @media only screen and (max-width: 1024px) {
        width: 350px;
        height: 200px;
    }
    @media only screen and (max-width: 768px) {
        width: 400px;
        height: 250px;
    }
    @media only screen and (max-width: 414px) {
        width: 400px;
        height: 250px;
    }
`;
const Wrap2 = styled.div`
    font-family: var(--ff-secondary);
    // text-align: right;
    // right: 10%;
    padding: 20px;
    // margin-left: 850px;
    // display: flex;

    position: absolute;
    margin: 0;
    align-items: center;
    justify-content: center;
    border: 1px solid white;
    // background-color: red;
    // background: rgba(100, 100, 100, 0.5);
    transform-style: preserve-3d;
    transform: rotateY(-10deg);
    width: 400px;
    height: 250px;

    box-shadow: 1px 1px 0px #999, 2px 2px 0px #999, 3px 3px 0px #999,
        4px 4px 0px #999, 5px 5px 0px #999;

    @media only screen and (max-width: 1024px) {
        width: 350px;
        height: 250px;
    }
`;
const Text = styled.p`
    font-size: var(--fs-h3);
    font-weight: var(--fw-bold);

    transform: scale(1, 1.3);
    text-shadow: 0.03em 0.03em 0 #6d6d6d;
`;
const CoverTitle = styled(Text)`
    font-family: 'Monoton', cursive !important;
    font-size: var(--fs-body);
    font-weight: var(--fw-light);
    color: var(--clr-accent);
    text-align: right;
`;
