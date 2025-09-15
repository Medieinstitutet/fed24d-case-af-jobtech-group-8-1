import {
	DigiHeader,
	DigiHeaderAvatar,
	DigiHeaderNavigation,
	DigiHeaderNavigationItem,
} from "@digi/arbetsformedlingen-react";
import logo from "../assets/logo-nextstep.svg";
import { NavLink, useLocation } from "react-router";


export const AppHeader = () => {

	const location = useLocation();
	const currentPath = location.pathname;

	console.log(currentPath);

	return (
		<>
			<DigiHeader afHideSystemName={true} afMenuButtonText="Meny">
				<a
					slot="header-logo"
					aria-label="Nextsteps startsida"
					href="/"
					style={{
						display: "flex",
						alignItems: "center",
						gap: "10px",
						paddingLeft: "16px",
						textDecoration: "none",
						color: "var(--digi--color--text--primary)",
					}}
				>
					<img src={logo} alt="Next Step" width={140} height={60} className="ns-footer__logo" />
				</a>
				<div slot="header-content">
					<DigiHeaderAvatar
						afSrc="/assets/images/avatar.svg"
						afAlt="Logga in"
						afIsLoggedIn={false}
						afHideSignature={true}
					></DigiHeaderAvatar>
				</div>
				<div slot="header-navigation">
					<DigiHeaderNavigation
						afCloseButtonText="Stäng"
						afCloseButtonAriaLabel="Stäng meny"
						afNavAriaLabel="Huvudmeny"
					>
						<DigiHeaderNavigationItem afCurrentPage={currentPath === "/" ? true : false}>
							<NavLink to={"/"}>Sök jobb	</NavLink>
						</DigiHeaderNavigationItem>
						<DigiHeaderNavigationItem afCurrentPage={currentPath === "/saved-jobs" ? true : false}>
							<NavLink to={"/saved-jobs"}>Dina sparade annonser</NavLink>
						</DigiHeaderNavigationItem>
						<DigiHeaderNavigationItem>
							<NavLink to={"/"}>Praktik & LIA</NavLink>
						</DigiHeaderNavigationItem>
						<DigiHeaderNavigationItem>
							<NavLink to={"/"}>Om oss</NavLink>
						</DigiHeaderNavigationItem>
					</DigiHeaderNavigation>
				</div>
			</DigiHeader>
		</>
	);
};
