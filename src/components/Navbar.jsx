import { useState } from "react";
import logo from "../assets/logo img.svg";

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header className="bg-white shadow-md">
			<nav className="container mx-auto px-4 py-3 flex justify-between items-center">
				{/* Left: Logo + Name */}
				<div className="flex items-center space-x-4">
					<img src={logo} alt="Logo" className="w-10 h-10" />
					<span
						className="text-lg sm:text-xl font-medium"
						style={{ color: "#34C06E" }}
					>
						<a href="/">शासकीय फळ रोपवाटिका चांदवड</a>
					</span>
				</div>

				{/* Hamburger Button */}
				<button
					className="md:hidden text-gray-700"
					onClick={() => setMenuOpen(!menuOpen)}
					aria-label="Toggle Menu"
				>
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						{menuOpen ? (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						) : (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						)}
					</svg>
				</button>

				{/* Right: Navigation Links (Desktop) */}
				<ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
					<li>
						<a href="#about" className="hover:text-green-600">
							About Us
						</a>
					</li>
					<li>
						<a href="#photos" className="hover:text-green-600">
							Photos
						</a>
					</li>
					<li>
						<a href="#services" className="hover:text-green-600">
							Services
						</a>
					</li>
					<li>
						<a href="#contact" className="hover:text-green-600">
							Contact
						</a>
					</li>
				</ul>
			</nav>

			{/* Mobile Menu (Hamburger Menu) */}
			{menuOpen && (
				<ul className="md:hidden px-4 pb-4 space-y-2 text-gray-700 font-medium bg-white shadow-md">
					<li>
						<a
							href="#about"
							className="block hover:text-green-600"
							onClick={() => setMenuOpen(false)}
						>
							About Us
						</a>
					</li>
					<li>
						<a
							href="#photos"
							className="block hover:text-green-600"
							onClick={() => setMenuOpen(false)}
						>
							Photos
						</a>
					</li>
					<li>
						<a
							href="#services"
							className="block hover:text-green-600"
							onClick={() => setMenuOpen(false)}
						>
							Services
						</a>
					</li>
					<li>
						<a
							href="#contact"
							className="block hover:text-green-600"
							onClick={() => setMenuOpen(false)}
						>
							Contact
						</a>
					</li>
				</ul>
			)}
		</header>
	);
}
