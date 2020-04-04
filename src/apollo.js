import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
	uri: 'https://yts.mx/api/v2/list_movies.json?quality=3D'
	// uri: 'https://yts.mx/api/v2/list_movies.json'
	// uri: 'https://yts-proxy.now.sh/list_movies.json?sort_by=rating'
});

export default client;
