import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
	uri: 'http://localhost:4000/',
	// uri: 'https://movie-ql.now.sh',
	// headers: {
	// 	'Content-Type': 'application/json',
	// 	'Access-Control-Allow-Origin': '*',
	// 	'Access-Control-Allow-Methods':
	// 		'GET, POST, PATCH, PUT, DELETE, OPTIONS',
	// 	'Access-Control-Allow-Headers': '*',
	// 	'Access-Control-Allow-Credentials': true,
	// },
	// fetchOptions: {
	// 	mode: 'no-cors',
	// },
	resolvers: {
		Movie: {
			isLiked: () => false,
		},
		Mutation: {
			toggleLikeMovie: (_, { id, isLiked }, { cache }) => {
				cache.writeData({
					id: `Movie:${id}`,
					data: { isLiked: !isLiked },
				});
			},
		},
	},
});

export default client;
