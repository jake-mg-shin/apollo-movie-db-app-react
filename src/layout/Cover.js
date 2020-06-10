import React from 'react';
import styled, { keyframes } from 'styled-components';

const Cover = () => {
    return (
        <BgImage>
            <ScreenWrap>
                <Screen>
                    <Text>Don't miss out!</Text>
                    <Text>Experience a special Movie DB for you</Text>
                    <ScrLogo>My Movie DB</ScrLogo>
                </Screen>
            </ScreenWrap>
        </BgImage>
    );
};

export default Cover;

// Style
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
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    z-index: 1;
    top: 18%;
    left: 50%;
    color: white;
    opacity: 0;

    position: relative;
    -webkit-perspective: 200px;
    perspective: 200px;
    width: 400px;
    height: 250px;

    @media only screen and (max-width: 1024px) {
        width: 350px;
        height: 240px;
    }
    @media only screen and (max-width: 768px) {
        top: 25%;
        width: 300px;
        height: 180px;
    }
    @media only screen and (max-width: 630px) {
        width: 270px;
        height: 150px;
    }
    @media only screen and (max-width: 560px) {
        left: 45%;
        width: 230px;
        height: 150px;
    }
    @media only screen and (max-width: 460px) {
        left: 40%;
        width: 220px;
        height: 140px;
    }

    animation: 2s ${slideFade} 1s forwards;
`;
const Screen = styled.div`
    position: absolute;
    font-family: var(--ff-secondary);
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    border: 1px solid white;
    -webkit-box-shadow: 1px 1px 0px #999, 2px 2px 0px #999, 3px 3px 0px #999,
        4px 4px 0px #999, 5px 5px 0px #999;
    box-shadow: 1px 1px 0px #999, 2px 2px 0px #999, 3px 3px 0px #999,
        4px 4px 0px #999, 5px 5px 0px #999;
    margin: 0;
    padding: 20px;

    width: 400px;
    height: 250px;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transform: rotateY(-10deg);
    transform: rotateY(-10deg);

    @media only screen and (max-width: 1024px) {
        width: 350px;
        height: 230px;
    }
    @media only screen and (max-width: 768px) {
        width: 280px;
        height: 150px;
    }
    @media only screen and (max-width: 630px) {
        width: 250px;
        height: 140px;
    }
    @media only screen and (max-width: 560px) {
        width: 230px;
        height: 140px;
    }
    @media only screen and (max-width: 460px) {
        padding: 10px;
        width: 200px;
        height: 120px;
    }
`;
const Text = styled.p`
    font-size: var(--fs-h3);
    font-weight: var(--fw-bold);

    -webkit-transform: scale(1, 1.3);

    -ms-transform: scale(1, 1.3);

    transform: scale(1, 1.3);
    text-shadow: 0.03em 0.03em 0 #6d6d6d;

    @media only screen and (max-width: 1024px) {
        line-height: 110%;
    }
    @media only screen and (max-width: 630px) {
        line-height: 95%;
    }
    @media only screen and (max-width: 460px) {
        font-size: var(--fs-body);
    }
`;
const ScrLogo = styled(Text)`
    font-family: 'Monoton', cursive !important;
    font-size: var(--fs-body);
    font-weight: var(--fw-light);
    color: var(--clr-accent);
    text-align: right;

    @media only screen and (max-width: 460px) {
        font-size: var(--fs-small);
    }
`;
