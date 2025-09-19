import { LayoutBlockVariation, LayoutColumnsElement, LayoutColumnsVariation } from "@digi/arbetsformedlingen";
import { DigiLayoutBlock, DigiLayoutColumns, DigiTypography } from "@digi/arbetsformedlingen-react";
import { JobAdApply } from "./JobAdApply";
import { JobAdDate } from "./JobAdDate";
import { JobAdDescription } from "./JobAdDescription";
import { JobAdDetails } from "./JobAdDetails";
import { JobAdEmployer } from "./JobAdEmployer";

export const JobAdDesktopView = () => {
	return (
		<>
			<DigiTypography style={{ wordBreak: "break-word" }}>
				<DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY} afVerticalPadding={true}>
					<DigiLayoutColumns afElement={LayoutColumnsElement.DIV} afVariation={LayoutColumnsVariation.TWO}>
						<DigiLayoutBlock afVariation={LayoutBlockVariation.TERTIARY} afVerticalPadding={true}>
							<JobAdDetails />
							<JobAdDescription />
							<JobAdDate />
						</DigiLayoutBlock>
						<DigiLayoutBlock afVariation={LayoutBlockVariation.SECONDARY} afVerticalPadding={false}>
							<JobAdEmployer />
							<JobAdApply />
						</DigiLayoutBlock>
					</DigiLayoutColumns>
				</DigiLayoutBlock>
			</DigiTypography>
		</>
	);
};
