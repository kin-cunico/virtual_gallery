"use client";

import { gql, GraphQLClient } from "graphql-request";
import { useState, useEffect } from "react";
import Image from "next/image";

// change to env file
const graphQLClient = new GraphQLClient(
	"https://api-eu-west-2.hygraph.com/v2/cll6tpjkw092r01ugfdbyao4w/master"
);

// typescript interface
interface Art {
	id: string;
	slug: string;
	tags: string[];
	title: string;
	image: {
		url: string;
	};
	description: string;
	artist: string;
}

interface Data {
	arts: Art[];
}

const FetchArts = () => {
	const [arts, setArts] = useState<any[]>([]);

	useEffect(() => {
		async function fetchData() {
			try {
				const data = await graphQLClient.request<Data>(QUERY);
				setArts(data.arts);
				console.log(data.arts);
			} catch (error) {
				console.log("Error message: ", error);
			}
		}
		fetchData();
	}, []);

	return (
		<div>
			{arts.map((art) => (
				<div key={art.id}>
					<h1>{art.title}</h1>
					<img
						src={art.image.url}
						alt={art.title}
						height={400}
						width={400}
					/>
					<p>{art.artist}</p>
					<p>{art.description}</p>
				</div>
			))}
		</div>
	);
};

const QUERY = gql`
	{
		arts {
			id
			slug
			tags
			title
			image {
				url
			}
			description
			artist
		}
	}
`;

export default FetchArts;
