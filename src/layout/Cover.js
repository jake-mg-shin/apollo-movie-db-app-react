import React, { Fragment } from 'react';
import styled from 'styled-components';

const Cover = () => {
    return (
        <Fragment>
            <BgImage />
        </Fragment>
    );
};

export default Cover;

const BgImage = styled.div`
    background-image: url('https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80');
    width: 100%;
    height: 700px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    z-index: -1;

    // @media only screen and (max-width: 991px) {
    //     height: 600px;
    // }
    // @media only screen and (max-width: 767px) {
    //     height: 500px;
    // }
`;
