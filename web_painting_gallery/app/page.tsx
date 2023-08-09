import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { gql } from "graphql-request";

const QUERY = gql``;

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<Navbar />
			<Hero />
			<Footer />
		</main>
	);
}