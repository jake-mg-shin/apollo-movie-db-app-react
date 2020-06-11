import React, { Fragment } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { Loader } from 'semantic-ui-react';

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
    const { loading, err, data } = useQuery(GET_TRAILERS, {
        variables: { title: title },
    });

    if (err) return <p>An error occurred</p>;

    return (
        <Fragment>
            {loading ? (
                <Loader size='medium'>Loading</Loader>
            ) : (
                <Fragment>
                    {data?.trailers?.map((t, i) => (
                        <Fragment key={i}>
                            <Video title={t.snippet.title} id={t.id.videoId} />
                        </Fragment>
                    ))}
                </Fragment>
            )}
        </Fragment>
    );
};
