import { DigiButton } from "@digi/arbetsformedlingen-react";
import "./App.css";
import { ButtonVariation } from "@digi/arbetsformedlingen";

function App() {
	return <>
		<DigiButton afVariation={ButtonVariation.PRIMARY}>Detta är en knapp</DigiButton>
	</>;
}

export default App;
