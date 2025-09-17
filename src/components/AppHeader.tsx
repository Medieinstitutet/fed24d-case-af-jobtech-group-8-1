import {
	DigiHeader,
	DigiHeaderAvatar,
	DigiHeaderNavigation,
	DigiHeaderNavigationItem,
	DigiMediaFigure,
	DigiMediaImage,
  } from "@digi/arbetsformedlingen-react";
  import { MediaFigureAlignment } from "@digi/arbetsformedlingen";
  import logo from "../assets/logo_nextstep_green.svg";
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
			<DigiMediaFigure
			  className="ns-footer__logo"
			  afAlignment={MediaFigureAlignment.START}
			>
			  <DigiMediaImage
				afSrc={logo}
				afAlt="NextStep"
				afWidth="140"
				afHeight="60"
			  />
			</DigiMediaFigure>
		  </a>
  
		  <div slot="header-content">
			<DigiHeaderAvatar
			  afSrc="/assets/images/avatar.svg"
			  afAlt="Logga in"
			  afIsLoggedIn={false}
			  afHideSignature={true}
			/>
		  </div>
  
		  <div slot="header-navigation">
			<DigiHeaderNavigation
			  afCloseButtonText="Stäng"
			  afCloseButtonAriaLabel="Stäng meny"
			  afNavAriaLabel="Huvudmeny"
			>
			  <DigiHeaderNavigationItem afCurrentPage={currentPath === "/"}>
				<NavLink to={"/"}>Sök jobb</NavLink>
			  </DigiHeaderNavigationItem>
  
			  <DigiHeaderNavigationItem afCurrentPage={currentPath === "/saved-jobs"}>
				<NavLink to={"/saved-jobs"}>Dina sparade annonser</NavLink>
			  </DigiHeaderNavigationItem>
  
			  <DigiHeaderNavigationItem afCurrentPage={currentPath === "/intern-lia"}>
				<NavLink to={"/"}>Praktik & LIA</NavLink>
			  </DigiHeaderNavigationItem>
  
			  <DigiHeaderNavigationItem afCurrentPage={currentPath === "/about"}>
				<NavLink to={"/about"}>Om oss</NavLink>
			  </DigiHeaderNavigationItem>
			</DigiHeaderNavigation>
		  </div>
		</DigiHeader>
	  </>
	);
  };
  
