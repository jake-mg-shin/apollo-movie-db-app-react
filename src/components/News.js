import React, { Fragment } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { Loader } from 'semantic-ui-react';
import styled from 'styled-components';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Feed from './Feed';

const GET_NEWS = gql`
    query getNews {
        news {
            title
            pubDate
            link
            enclosure {
                url
            }
        }
    }
`;

const News = () => {
    const { loading, err, data } = useQuery(GET_NEWS);
    // console.log(loading, data);

    if (err) return <p>An error occurred</p>;

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3, // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2, // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
        },
    };

    return (
        <Fragment>
            {loading ? (
                <Loader size='small'>Loading</Loader>
            ) : (
                <NewsWrapper>
                    <Carousel
                        focusOnSelect={true}
                        swipeable={true}
                        draggable={true}
                        showDots={true}
                        responsive={responsive}
                        ssr={false} // means to render carousel on server-side.
                        infinite={true}
                        // autoPlay={
                        //     this.props.deviceType !== 'mobile' ? true : false
                        // }
                        autoPlaySpeed={1000}
                        keyBoardControl={true}
                        customTransition='all .5'
                        transitionDuration={500}
                        containerClass='carousel-container'
                        removeArrowOnDeviceType={['tablet', 'mobile']}
                        // deviceType={this.props.deviceType}
                        dotListClass='custom-dot-list-style'
                        itemClass='carousel-item-padding-40-px'
                    >
                        {data?.news?.map((f, i) => (
                            <Feed
                                key={i}
                                title={f.title}
                                url={f.enclosure.url}
                                pub={f.pubDate}
                                link={f.link}
                            />
                        ))}
                    </Carousel>
                </NewsWrapper>
            )}
        </Fragment>
    );
};

export default News;

const NewsWrapper = styled.div`
    // display: -ms-grid;
    // display: grid;

    // grid-template-columns: repeat(2, 1fr);
    // grid-gap: 1rem;
    // grid-auto-flow: row dense;
    // max-width: 1400px;
    // margin-left: auto;
    // margin-right: auto;

    // // @media only screen and (max-width: 1024px) {
    // //     -ms-grid-columns: (1fr) [2];
    // //     grid-template-columns: repeat(2, 1fr);
    // //     max-width: 1000px;
    // //     margin-top: 3em;
    // // }
    // // @media only screen and (max-width: 768px) {
    // //     -ms-grid-columns: (1fr) [1];
    // //     grid-template-columns: repeat(1, 1fr);
    // //     max-width: 600px;
    // //     margin-top: 1em;
    // // }
    // padding: 0 5rem;
`;
