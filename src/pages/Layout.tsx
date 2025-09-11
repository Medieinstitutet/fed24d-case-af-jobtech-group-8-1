import { Outlet } from "react-router";
import AppFooter from "../components/AppFooter";
import { AppHeader } from "../components/AppHeader";

export const Layout = () => {
	return (
		<>
			<header>
				<AppHeader />
			</header>
			<main>
				<Outlet />
			</main>
			{<AppFooter />}
		</>
	);
};
