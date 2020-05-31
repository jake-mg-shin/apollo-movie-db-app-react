import React, { Fragment, useState, useEffect } from 'react';
import { Container, Loader } from 'semantic-ui-react';
import Parser from 'rss-parser';
import styled from 'styled-components';

import Feed from './Feed';

const News = () => {
    const [news, setNews] = useState(null);
    const [loadingNews, setLoadingNews] = useState(true);

    useEffect(() => {
        const getNews = async () => {
            const url = 'https://movieweb.com/rss/movie-news/';
            const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
            let parser = new Parser();
            let data = await parser.parseURL(CORS_PROXY + url);

            let feed = [];
            for (let i = 0; i < 4; i++) {
                feed.push(data.items[i]);
            }

            setNews(feed);
            setLoadingNews(false);
        };
        getNews();
        // eslint-disable-next-line
    }, []);

    console.log(news);

    return (
        <NewsWrapper>
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
        </NewsWrapper>
    );
};

export default News;

const NewsWrapper = styled.div`
    display: -ms-grid;
    display: grid;

    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    grid-auto-flow: row dense;
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;

    // @media only screen and (max-width: 1024px) {
    //     -ms-grid-columns: (1fr) [2];
    //     grid-template-columns: repeat(2, 1fr);
    //     max-width: 1000px;
    //     margin-top: 3em;
    // }
    // @media only screen and (max-width: 768px) {
    //     -ms-grid-columns: (1fr) [1];
    //     grid-template-columns: repeat(1, 1fr);
    //     max-width: 600px;
    //     margin-top: 1em;
    // }
`;
