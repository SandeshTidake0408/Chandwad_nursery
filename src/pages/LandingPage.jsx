import React from "react";
import About from "../components/About";
import Home from "../components/home";
import Visuals from "../components/Visuals";
import Services from "../components/Services";
import Contact from "../components/Contact";
export default function LandingPage() {
	return (
		<>
			<Home />
			<section id="about">
				<About />
			</section>
			<section id="photos">
				<Visuals />
			</section>
			<section id="services">
				<Services />
			</section>
			<section id="contact">
				<Contact />
			</section>
		</>
	);
}
