import { LayoutBlockVariation, LayoutColumnsElement, LayoutColumnsVariation } from "@digi/arbetsformedlingen";
import { DigiLayoutBlock, DigiLayoutColumns, DigiTypography } from "@digi/arbetsformedlingen-react";
import { JobAdApply } from "./JobAdApply";
import { JobAdDate } from "./JobAdDate";
import { JobAdDescription } from "./JobAdDescription";
import { JobAdDetails } from "./JobAdDetails";
import { JobAdEmployer } from "./JobAdEmployer";
import type { IJobAdDetailed } from "../../models/IJobAd";

type JobAdMDesktopViewProps = {
	jobAd: IJobAdDetailed;
};

export const JobAdDesktopView = ({ jobAd }: JobAdMDesktopViewProps) => {
	return (
		<>
			<DigiTypography style={{ wordBreak: "break-word" }}>
				<DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY} afVerticalPadding={true}>
					<DigiLayoutColumns afElement={LayoutColumnsElement.DIV} afVariation={LayoutColumnsVariation.TWO}>
						<DigiLayoutBlock afVariation={LayoutBlockVariation.TERTIARY} afVerticalPadding={true}>
							<JobAdDetails jobAd={jobAd} />
							<JobAdDescription jobAd={jobAd} />
							<JobAdDate jobAd={jobAd} />
						</DigiLayoutBlock>
						<DigiLayoutBlock afVariation={LayoutBlockVariation.SECONDARY} afVerticalPadding={false}>
							<JobAdEmployer jobAd={jobAd} />
							<JobAdApply jobAd={jobAd} />
						</DigiLayoutBlock>
					</DigiLayoutColumns>
				</DigiLayoutBlock>
			</DigiTypography>
		</>
	);
};
