import ApolloClient from 'apollo-boost';

const API_KEY = `${process.env.REACT_APP_API_KEY}`;

const client = new ApolloClient({
    uri: API_KEY,
    // uri: 'http://localhost:4000/',
    resolvers: {
        Movie: {
            isLiked: () => false,
        },
        Mutation: {
            LikeMovie: (_, { id, isLiked }, { cache }) => {
                cache.writeData({
                    id: `Movie:${id}`,
                    data: { isLiked: !isLiked },
                });
            },
        },
    },
});

export default client;
