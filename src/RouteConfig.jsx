import { Route, Routes } from "react-router-dom";

import NotFound from "./pages/NotFound";
import Layout from "./pages/Layout";
import LandingPage from "./pages/LandingPage";

export default function RouteConfig() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<LandingPage />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</>
	);
}
