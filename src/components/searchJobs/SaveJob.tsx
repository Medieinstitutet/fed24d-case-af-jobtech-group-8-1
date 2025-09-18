import { ButtonType, ButtonVariation } from "@digi/arbetsformedlingen";
import {
	DigiButton,
	DigiIconStar,
	DigiIconStarReg,
} from "@digi/arbetsformedlingen-react";

type SaveJobProps = {
	isSaved: boolean;
	toggleSaved: () => void;
};

export const SaveJob = ({ isSaved, toggleSaved }: SaveJobProps) => {

	return (
		<DigiButton afVariation={ButtonVariation.FUNCTION} afType={ButtonType.BUTTON} onAfOnClick={toggleSaved}>
			<DigiIconStarReg
				slot="icon"
				style={{ display: isSaved ? "none" : "inline-flex", marginRight: "0.4rem" }}
			/>
			<DigiIconStar
				slot="icon"
				style={{ display: isSaved ? "inline-flex" : "none", marginRight: "0.4rem" }}
			/>
			{isSaved ? "Ta bort" : "Spara"}
		</DigiButton>
	);
};
