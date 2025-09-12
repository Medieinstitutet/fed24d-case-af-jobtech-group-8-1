import {
	DigiHeader,
	DigiHeaderAvatar,
	DigiHeaderNavigation,
	DigiHeaderNavigationItem,
} from "@digi/arbetsformedlingen-react";
import logo from "../assets/logo-nextstep.svg";


export const AppHeader = () => {
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
						<DigiHeaderNavigationItem afCurrentPage={true}>
							<a href="/">Sök jobb</a>
						</DigiHeaderNavigationItem>
						<DigiHeaderNavigationItem>
							<a href="/saved-jobs">Dina sparade annonser</a>
						</DigiHeaderNavigationItem>
						<DigiHeaderNavigationItem>
							<a href="/">Praktik & LIA</a>
						</DigiHeaderNavigationItem>
						<DigiHeaderNavigationItem>
							<a href="/">Om oss</a>
						</DigiHeaderNavigationItem>
					</DigiHeaderNavigation>
				</div>
			</DigiHeader>
		</>
	);
};
