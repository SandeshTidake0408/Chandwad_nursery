import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function Layout() {
	return (
		<div className="min-h-screen bg-green-50">
			<Navbar />
			<main className="">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
