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
		<div className="flex bg-tertiary text-black pt-36">
			{arts.map((art) => (
				<div
					key={art.id}
					className="flex flex-col items-center"
				>
					<h1 className="p-4 text-center">{art.title}</h1>
					<img
						src={art.image.url}
						alt={art.title}
						height={400}
						width={400}
					/>
					<p className="text-center py-4 font-bold">
						<span className="font-normal">Author:</span> {art.artist}
					</p>
					<p className="text-justify p-4">{art.description}</p>
					<p className="text-center py-2">{art.tags}</p>
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
