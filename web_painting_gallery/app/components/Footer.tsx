import Link from "next/link";
import React from "react";

type Props = {};

function Footer({}: Props) {
	return (
		<footer className="bg-secondary flex w-full justify-around py-6">
			<section className="flex flex-col items-center">
				<h2 className="text-white font-semibold">Socials</h2>
				<Link
					href="github.com/kin-cunico"
					target="_blank"
				>
					GitHub
				</Link>
				<Link
					href="linkedin.com/in/kincunicoen"
					target="_blank"
				>
					LinkedIn
				</Link>
			</section>
			<section className="flex flex-col items-center">
				<h2 className="text-white font-semibold">Developed by:</h2>
				<Link
					href="kincunico.dev"
					target="_blank"
					id="contact"
				>
					Kin Cunico
				</Link>
			</section>
		</footer>
	);
}

export default Footer;
