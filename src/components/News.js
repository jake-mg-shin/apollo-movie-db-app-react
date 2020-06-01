import React, { useState, useEffect } from 'react';
import { Loader } from 'semantic-ui-react';
import Parser from 'rss-parser';
import styled from 'styled-components';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Feed from './Feed';

const News = () => {
    const [news, setNews] = useState(null);
    const [loadingNews, setLoadingNews] = useState(true);

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

    useEffect(() => {
        const getNews = async () => {
            const url = 'https://movieweb.com/rss/movie-news/';
            const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
            let parser = new Parser();
            let data = await parser.parseURL(CORS_PROXY + url);

            let feed = [];
            for (let i = 0; i < 15; i++) {
                feed.push(data.items[i]);
            }

            setNews(feed);
            setLoadingNews(false);
        };
        getNews();
        // eslint-disable-next-line
    }, []);

    // console.log(news);

    return (
        <NewsWrapper>
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={false} // means to render carousel on server-side.
                infinite={false}
                // autoPlay={this.props.deviceType !== 'mobile' ? true : false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition='all .5'
                transitionDuration={800}
                containerClass='carousel-container'
                removeArrowOnDeviceType={['tablet', 'mobile']}
                // deviceType={this.props.deviceType}
                dotListClass='custom-dot-list-style'
                itemClass='carousel-item-padding-40-px'
            >
                {loadingNews ? (
                    <Loader size='small'>Loading</Loader>
                ) : (
                    news.map((f, i) => (
                        <Feed
                            key={i}
                            title={f.title}
                            img={f.enclosure.url}
                            pub={f.pubDate}
                            link={f.link}
                        />
                    ))
                )}
            </Carousel>
        </NewsWrapper>
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
    padding: 0 3rem;
`;
