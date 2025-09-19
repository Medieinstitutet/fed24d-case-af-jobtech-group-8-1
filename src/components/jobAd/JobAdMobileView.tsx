import { LayoutBlockVariation, LayoutColumnsElement, LayoutColumnsVariation } from "@digi/arbetsformedlingen";
import { DigiLayoutBlock, DigiLayoutColumns, DigiTypography } from "@digi/arbetsformedlingen-react";
import { JobAdApply } from "./JobAdApply";
import { JobAdDate } from "./JobAdDate";
import { JobAdDescription } from "./JobAdDescription";
import { JobAdDetails } from "./JobAdDetails";
import { JobAdEmployer } from "./JobAdEmployer";

export const JobAdMobileView = () => {
	return (
		<>
			<DigiTypography style={{ wordBreak: "break-word", overflowWrap: "anywhere" }}>
				<DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY} afVerticalPadding={true}>
					<DigiLayoutColumns afElement={LayoutColumnsElement.DIV} afVariation={LayoutColumnsVariation.ONE}>
						<DigiLayoutBlock afVariation={LayoutBlockVariation.TERTIARY} afVerticalPadding={true}>
							<JobAdDetails />
							<JobAdDescription />
							<JobAdEmployer />
							<JobAdApply />
							<JobAdDate />
						</DigiLayoutBlock>
					</DigiLayoutColumns>
				</DigiLayoutBlock>
			</DigiTypography>
		</>
	);
};
