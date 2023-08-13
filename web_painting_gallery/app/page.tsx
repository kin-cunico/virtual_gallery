import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function Home() {
	return (
		<main className="flex flex-col m-0 h-full p-0">
			<Navbar />
			<Hero />
			<Footer />
		</main>
	);
}
