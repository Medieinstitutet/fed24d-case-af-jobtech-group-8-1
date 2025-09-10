import { Outlet } from "react-router";
import AppFooter from "../components/AppFooter";

export const Layout = () => {
	return (
		<>
			{/* Header */}
			<main>
				<Outlet />
			</main>
			{<AppFooter />}
		</>
	);
};
