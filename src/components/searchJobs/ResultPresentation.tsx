import {
	LayoutBlockVariation,
	LayoutBlockContainer,
	LayoutContainerVariation,
	TypographyMetaVariation,
	LayoutColumnsElement,
	TypographyTimeVariation
  } from "@digi/arbetsformedlingen";
  import {
	DigiLayoutBlock,
	DigiLayoutColumns,
	DigiLayoutContainer,
	DigiLink,
	DigiTypography,           
	DigiTypographyMeta,
	DigiTypographyPreamble,
	DigiTypographyTime
  } from "@digi/arbetsformedlingen-react";
  import { SaveJob } from "./SaveJob";
  import type { IJobAdBrief } from "../../models/IJobAd";
  
  type ResultPresentationProps = {
	job: IJobAdBrief;
	getIsSaved: (id: string) => boolean;
	handleSaveBtn: (job: IJobAdBrief) => void;
  }
  
  export const ResultPresentation = ({ job, getIsSaved, handleSaveBtn }: ResultPresentationProps) => {
	return (
	  <DigiLayoutBlock
		afVariation={LayoutBlockVariation.SECONDARY}
		afContainer={LayoutBlockContainer.FLUID}
		afVerticalPadding
		afMarginBottom
	  >
		<DigiTypography>
		  <DigiLink afHref="#" hideVisitedColor>
			<h3 style={{ marginTop: 0 }}>{job.headline}</h3>
		  </DigiLink>
  
		  <DigiLayoutContainer afNoGutter afMarginBottom afVariation={LayoutContainerVariation.FLUID}>
			<DigiTypographyMeta afVariation={TypographyMetaVariation.PRIMARY}>
			  <DigiTypographyPreamble>{job.employer.name}</DigiTypographyPreamble>
			  <p slot="secondary">{job.workplace_address?.municipality ?? "—"}</p>
			</DigiTypographyMeta>
		  </DigiLayoutContainer>
  
		  <DigiLayoutColumns afElement={LayoutColumnsElement.DIV}>
			<p style={{ margin: 0 }}>
			  Publicerad:{" "}
			  <DigiTypographyTime
				afVariation={TypographyTimeVariation.PRETTY}
				afDateTime={job.publication_date}
			  />
			</p>
			<div style={{ marginLeft: "auto", justifySelf: "end", textAlign: "right" }}>
			  <SaveJob isSaved={getIsSaved(job.id)} toggleSaved={() => handleSaveBtn(job)} />
			</div>
		  </DigiLayoutColumns>
		</DigiTypography>
	  </DigiLayoutBlock>
	);
  };
  