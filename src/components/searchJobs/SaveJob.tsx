import { ButtonType, ButtonVariation } from "@digi/arbetsformedlingen";
import { DigiButton, DigiIconHeart, DigiIconTrash } from "@digi/arbetsformedlingen-react";

type SaveJobProps = {
	isSaved: boolean;
	toggleSaved: () => void;
};

export const SaveJob = ({ isSaved, toggleSaved }: SaveJobProps) => {
	if (isSaved) {
		return (
			<DigiButton 
                afVariation={ButtonVariation.SECONDARY} 
                afType={ButtonType.BUTTON} 
                onAfOnClick={toggleSaved}
            >
				Ta bort från sparade
			</DigiButton>
		);
	}

	return (
		<DigiButton 
            afVariation={ButtonVariation.PRIMARY} 
            afType={ButtonType.BUTTON} 
            onAfOnClick={toggleSaved}
        >
			Spara dethär jobbet
		</DigiButton>
	);
};
