import React from 'react';
// import { useParams } from 'react-router-dom';
// import { gql } from 'apollo-boost';
// import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
import Axios from 'axios';

const Container = styled.div`
	height: 100vh;
	background-image: linear-gradient(-45deg, #d754ab, #fd723a);
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	color: white;
`;

const Column = styled.div`
	margin-left: 10px;
	width: 50%;
`;

const Title = styled.h1`
	font-size: 65px;
	margin-bottom: 15px;
`;

const Subtitle = styled.h4`
	font-size: 35px;
	margin-bottom: 10px;
`;

const Description = styled.p`
	font-size: 28px;
`;

const Poster = styled.div`
	width: 25%;
	height: 60%;
	background-color: transparent;
	background-image: url(${props => props.bg});
	background-size: cover;
	background-position: center center;
`;

class Detail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			md: [],
			title: [],
			language: [],
			rating: [],
			summary: [],
			bg: []
		};
	}

	getMovie = async () => {
		const _id = this.props.match.params.id;
		console.log(_id);

		await Axios.get(
			'https://yts.mx/api/v2/list_movies.json?quality=3D'
		).then(res => {
			const picked = res.data.data.movies;
			console.log(typeof picked[3].id);

			const __id = parseInt(_id);
			console.log(_id);

			let md = [];
			for (let i = 0; i < picked.length; i++) {
				if (__id === picked[i].id) {
					console.log(typeof picked[i].id);
					md.push(picked[i]);
				}
			}
			console.log(md);
			this.setState({ md: md });
			console.log(this.state.md[0]);

			const title = this.state.md[0].title;
			this.setState({ title: title });
			const language = this.state.md[0].language;
			this.setState({ language: language });
			const rating = this.state.md[0].rating;
			this.setState({ rating: rating });
			const summary = this.state.md[0].summary;
			this.setState({ summary: summary });
			const bg = this.state.md[0].large_cover_image;
			this.setState({ bg: bg });
		});
	};

	componentDidMount() {
		this.getMovie();
	}

	render() {
		const { title } = this.state;
		const { language } = this.state;
		const { rating } = this.state;
		const { summary } = this.state;
		const { bg } = this.state;

		return (
			<Container>
				<Column>
					<Title>{title}</Title>
					<div>
						<Subtitle>
							{language} · {rating}
						</Subtitle>
						<Description>{summary}</Description>
					</div>
				</Column>
				<Poster bg={bg}></Poster>
			</Container>
		);
	}
}

export default Detail;
