import { LayoutBlockVariation, LayoutColumnsElement, LayoutColumnsVariation } from "@digi/arbetsformedlingen";
import { DigiLayoutBlock, DigiLayoutColumns, DigiTypography } from "@digi/arbetsformedlingen-react";
import { JobAdApply } from "./JobAdApply";
import { JobAdDate } from "./JobAdDate";
import { JobAdDescription } from "./JobAdDescription";
import { JobAdDetails } from "./JobAdDetails";
import { JobAdEmployer } from "./JobAdEmployer";
import type { IJobAdDetailed } from "../../models/IJobAd";

type JobAdMobileViewProps = {
	jobAd: IJobAdDetailed;
};

export const JobAdMobileView = ({ jobAd }: JobAdMobileViewProps) => {
	return (
		<>
			<DigiTypography style={{ wordBreak: "break-word", overflowWrap: "anywhere" }}>
				<DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY} afVerticalPadding={true}>
					<DigiLayoutColumns afElement={LayoutColumnsElement.DIV} afVariation={LayoutColumnsVariation.ONE}>
						<DigiLayoutBlock afVariation={LayoutBlockVariation.TERTIARY} afVerticalPadding={true}>
							<JobAdDetails jobAd={jobAd} />
							<JobAdDescription jobAd={jobAd} />
							<JobAdEmployer jobAd={jobAd} />
							<JobAdApply jobAd={jobAd} />
							<JobAdDate jobAd={jobAd} />
						</DigiLayoutBlock>
					</DigiLayoutColumns>
				</DigiLayoutBlock>
			</DigiTypography>
		</>
	);
};
