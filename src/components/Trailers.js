import React, { Fragment } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { Loader, Message } from 'semantic-ui-react';

import Video from './Video';

const GET_TRAILERS = gql`
    query getTrailers($title: String) {
        trailers(title: $title) {
            id {
                videoId
            }
            snippet {
                title
                publishedAt
            }
        }
    }
`;

export default ({ title }) => {
    const { loading, error, data } = useQuery(GET_TRAILERS, {
        variables: { title: title },
    });

    return (
        <Fragment>
            {error ? (
                <Message
                    negative
                    floating
                    style={{
                        position: 'relative',
                        top: '0',
                        left: '0',
                    }}
                >
                    <Message.Header>
                        Sorry! The Daily limit of YouTube Data API V3 is
                        exceeded.
                    </Message.Header>
                    <p>Trailer will be back, please try again later.</p>
                </Message>
            ) : (
                <Fragment>
                    {loading ? (
                        <Loader size='medium'>Loading</Loader>
                    ) : (
                        <Fragment>
                            {data?.trailers?.map((t, i) => (
                                <Fragment key={i}>
                                    <Video
                                        title={t.snippet.title}
                                        id={t.id.videoId}
                                    />
                                </Fragment>
                            ))}
                        </Fragment>
                    )}
                </Fragment>
            )}
        </Fragment>
    );
};
