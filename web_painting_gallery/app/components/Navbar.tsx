import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "public/svg/logo-no-background.svg";

type Props = {};

const Navbar = (props: Props) => {
	return (
		<nav className=" bg-secondary items-center flex flex-col gap-4 py-4 fixed w-full font-primary text-lg">
			<Image
				src={logo}
				alt="logo"
				width={300}
				height={300}
			/>
			<ul className="  text-quaternary font-bold flex space-x-10 sm:space-x-40 ">
				<li>
					<Link
						id="home"
						href="/#home"
						className="hover:text-primary focus:bg-tertiary focus:text-black transition-colors p-2 rounded-md w-48"
					>
						Home
					</Link>
				</li>
				<li>
					<Link
						href="#"
						className="hover:text-primary focus:bg-tertiary focus:text-black transition-colors p-2 rounded-md"
					>
						About
					</Link>
				</li>
				<li>
					<Link
						href="/#contact"
						className="hover:text-primary focus:bg-tertiary focus:text-black transition-colors p-2 rounded-md"
					>
						Contact
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
