import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
import { Dimmer, Loader, Container, Popup, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import Trailers from '../components/Trailers';
import Footer from '../layout/Footer';

const GET_MOVIE = gql`
    query getMovie($id: Int!) {
        movie(id: $id) {
            id
            title
            medium_cover_image
            language
            year
            rating
            description_intro
            genres
            runtime
            mpa_rating
            isLiked @client
        }
    }
`;

export default () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    let { id } = useParams();

    const { loading, err, data } = useQuery(GET_MOVIE, {
        variables: { id: parseInt(id) },
    });

    if (err) return <p>An error occurred</p>;

    return (
        <Container>
            {loading && (
                <Dimmer active>
                    <Loader size='large'>Loading</Loader>
                </Dimmer>
            )}
            <Wrapper>
                <Link to='/'>
                    <LogoWrap>
                        <Popup
                            content='Back to Home'
                            open
                            position='right center'
                            inverted
                            size='mini'
                            trigger={<Logo>AMDB</Logo>}
                        />
                    </LogoWrap>
                </Link>

                <br />
                <Title>Details</Title>
                <SubTitle>
                    <Icon name='ellipsis vertical' />
                    &nbsp;Check the Details
                </SubTitle>
                <br />

                <Content>
                    <Poster src={data?.movie?.medium_cover_image} />
                    {!loading && (
                        <DescWrapper>
                            <ConTitle>{data?.movie?.title}</ConTitle>
                            <ConSub>
                                {data?.movie?.mpa_rating} |{' '}
                                {data?.movie?.runtime} min |{' '}
                                {data?.movie?.language} | {data?.movie?.year} |{' '}
                                <span role='img' aria-label='rating'>
                                    ⭐️
                                </span>{' '}
                                {data?.movie?.rating}
                            </ConSub>
                            <Description>
                                {data?.movie?.description_intro}
                            </Description>
                        </DescWrapper>
                    )}
                </Content>
                <br />
                <br />
                <br />
                <Title>Trailer</Title>
                <SubTitle>
                    <Icon name='ellipsis vertical' />
                    &nbsp;Watch the Trailer
                </SubTitle>
                <br />

                <Trailers title={data?.movie?.title} />

                <Source>
                    <em>
                        Source:{' '}
                        <a
                            href='https://developers.google.com/youtube/v3'
                            target='_black'
                        >
                            https://developers.google.com/youtube/v3
                        </a>
                    </em>
                </Source>
                <Footer />
            </Wrapper>
        </Container>
    );
};

// Style
const Wrapper = styled.div`
    font-family: var(--ff-secondary);
    color: white;
    margin-top: 60px;
`;
const Wrap = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
`;
const LogoWrap = styled(Wrap)`
    text-align: left;
    padding: 1.5em 0;
`;
const Logo = styled.div`
    font-family: 'Monoton', cursive;
    font-size: var(--fs-h3);
    color: black;
    padding: 0.6rem;
    border: 1px solid var(--clr-accent);
    border-radius: 5px;
    background-color: var(--clr-accent);
    -webkit-transition: background-color 0.2s ease-in-out;
    -o-transition: background-color 0.2s ease-in-out;
    transition: background-color 0.2s ease-in-out;

    :hover {
        color: white;
        border-color: white;
        background-color: black;
        -webkit-transition: border 0.5s ease-in-out;
        -o-transition: border 0.5s ease-in-out;
        transition: border 0.5s ease-in-out;
    }
`;
const Title = styled.div`
    font-size: var(--fs-h3);
    color: var(--clr-accent);
    padding: 1rem 0;
`;
const SubTitle = styled.div`
    font-family: var(--ff-primary);
    font-size: var(--fs-body);
`;
const Content = styled(Wrap)`
    position: relative;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 0.5rem;
    border: 1px solid white;
    -webkit-box-shadow: 1px 1px 0px #999, 2px 2px 0px #999, 3px 3px 0px #999,
        4px 4px 0px #999, 5px 5px 0px #999;
    box-shadow: 1px 1px 0px #999, 2px 2px 0px #999, 3px 3px 0px #999,
        4px 4px 0px #999, 5px 5px 0px #999;

    @media only screen and (max-width: 992px) {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
    }
`;
const Poster = styled.img`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 30%;
    height: auto;
`;
const DescWrapper = styled(Wrap)`
    flex-direction: column;
    width: 100%;
    opacity: 0.8;
`;
const Text = styled.div`
    font-family: var(--ff-primary);
    font-size: var(--fs-h3);
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px;
`;
const ConTitle = styled(Text)``;
const ConSub = styled(Text)`
    font-size: var(--fs-body);
`;
const Description = styled(Text)`
    font-family: var(--ff-secondary);
    font-size: var(--fs-small);
`;
const Source = styled.div`
    text-align: right;
    opacity: 0.8;
`;
