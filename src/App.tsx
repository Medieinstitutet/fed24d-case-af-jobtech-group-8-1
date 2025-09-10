import { DigiButton } from "@digi/arbetsformedlingen-react";
import "./App.css";
import { ButtonVariation } from "@digi/arbetsformedlingen";
import AppFooter from "./components//AppFooter";

function App() {
	return <>
		<DigiButton afVariation={ButtonVariation.PRIMARY}>Detta är en knapp</DigiButton>
		<AppFooter />
	</>;
}

export default App;
