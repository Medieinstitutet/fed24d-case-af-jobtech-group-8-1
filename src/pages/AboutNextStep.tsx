import {
	LayoutBlockVariation,
	LayoutBlockContainer,
	TypographyVariation,
	InfoCardHeadingLevel,
	InfoCardType,
	InfoCardVariation,
	InfoCardSize,
	ListType,
	LayoutContainerVariation,
	LayoutContainerMaxWidth,
} from "@digi/arbetsformedlingen";
import {
	DigiLayoutBlock,
	DigiTypography,
	DigiInfoCard,
	DigiLink,
	DigiList,
	DigiLayoutContainer,
} from "@digi/arbetsformedlingen-react";

export default function AboutNextStep() {
	return (
		<main aria-labelledby="about-title" style={{margin: "2rem 0"}}>
			<DigiLayoutContainer
				afVariation={LayoutContainerVariation.STATIC}
				afNoGutter
				afMaxWidth={LayoutContainerMaxWidth.WIDTH_1400}
			>
				<DigiTypography afVariation={TypographyVariation.LARGE}>
					<h2>Om Next Step</h2>
				</DigiTypography>

				<DigiTypography afVariation={TypographyVariation.LARGE}>
					<p id="about-title" style={{ maxWidth: 900, marginTop: 0 }}>
						Next Step är ett studentdrivet projekt som hjälper unga att hitta sin väg in i arbetslivet - med
						fokus på <strong>praktik</strong>, <strong>trainee</strong> och <strong>junior</strong>roller.
					</p>
				</DigiTypography>

				<DigiTypography>
					<p style={{ maxWidth: 900 }}>
						Vi samlar riktiga platsannonser och lyfter fram alternativ för dig i början av karriären. Med
						öppna API:er, tydliga urval och ett tillgängligt designsystem vill vi göra jobbsökandet enklare,
						mer transparent och mindre tidskrävande.
					</p>
					<p style={{ maxWidth: 900 }}>
						Tjänsten uppdateras löpande av studenter - i nära dialog med användare, skolor och arbetsgivare.
						Har du idéer eller saknar du något? Hör gärna av dig!
					</p>
				</DigiTypography>

				<DigiList afListType={ListType.BULLET} style={{ maxWidth: 900, lineHeight: 1.6, marginTop: "0.5rem" }}>
					<li>Fokuserade sökningar på praktik, LIA, trainee och juniorroller</li>
					<li>Klart och enkelt gränssnitt med tydlig feedback</li>
					<li>Byggt på öppna data - lätt att förstå och vidareutveckla</li>
				</DigiList>

				<div style={{ marginTop: "1rem" }}>
					<DigiLink afHref="/" hideVisitedColor>
						Börja söka jobb →
					</DigiLink>
				</div>
			</DigiLayoutContainer>

			<DigiLayoutContainer
				afVariation={LayoutContainerVariation.STATIC}
				afNoGutter
				afMaxWidth={LayoutContainerMaxWidth.WIDTH_1400}
				afVerticalPadding
			>
				<DigiTypography afVariation={TypographyVariation.LARGE}>
					<h2 style={{ marginTop: 0 }}>Tips och info</h2>
				</DigiTypography>

				<DigiLayoutContainer
					afVariation={LayoutContainerVariation.STATIC}
					afNoGutter
					afMaxWidth={LayoutContainerMaxWidth.WIDTH_1400}
					afVerticalPadding
				>
					<div
						style={{
							display: "grid",
							gap: "1rem",
							gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
							alignItems: "stretch",
						}}
					>
						<DigiInfoCard
							afHeading="Sök smart"
							afHeadingLevel={InfoCardHeadingLevel.H3}
							afType={InfoCardType.TIP}
							afVariation={InfoCardVariation.SECONDARY}
							afSize={InfoCardSize.STANDARD}
							afLinkHref="/about#contact"
							afLinkText="Få personliga söktips"
						>
							<p>
								Börja brett och smalna av. Kombinera yrkesord med ort/område. Testa synonymer och
								engelska termer (t.ex. "internship"). Spara sökningar du ofta använder.
							</p>
						</DigiInfoCard>

						<DigiInfoCard
							afHeading="Stärk din ansökan"
							afHeadingLevel={InfoCardHeadingLevel.H3}
							afType={InfoCardType.TIP}
							afVariation={InfoCardVariation.SECONDARY}
							afSize={InfoCardSize.STANDARD}
							afLinkHref="/about#contact"
							afLinkText="Be om CV-mall"
						>
							<p>
								Lyft motivation, relevanta kurser och projekt. Anpassa rubrik och inledning efter roll.
								Kort, tydligt och fokuserat vinner ofta.
							</p>
						</DigiInfoCard>

						<DigiInfoCard
							afHeading="Förbered intervjun"
							afHeadingLevel={InfoCardHeadingLevel.H3}
							afType={InfoCardType.TIP}
							afVariation={InfoCardVariation.SECONDARY}
							afSize={InfoCardSize.STANDARD}
							afLinkHref="/about#contact"
							afLinkText="Få en övningsfrågebank"
						>
							<p>
								Läs på om arbetsgivaren. Ha 2-3 exempel som visar dina styrkor och ställ frågor om team,
								handledning och förväntningar.
							</p>
						</DigiInfoCard>
					</div>
				</DigiLayoutContainer>

				<DigiLayoutContainer
					afVariation={LayoutContainerVariation.STATIC}
					afNoGutter
					afMaxWidth={LayoutContainerMaxWidth.WIDTH_1400}
					afVerticalPadding
				>
					<div
						style={{
							display: "grid",
							gap: "1rem",
							gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
							alignItems: "stretch",
						}}
					>
						<DigiInfoCard
							afHeading="LIA & praktik"
							afHeadingLevel={InfoCardHeadingLevel.H3}
							afType={InfoCardType.TIP}
							afVariation={InfoCardVariation.SECONDARY}
							afSize={InfoCardSize.STANDARD}
							afLinkHref="/about#contact"
							afLinkText="Mall för förfrågan"
						>
							<p>
								Var tydlig med period, omfattning och mål. Beskriv vad du vill lära dig och hur du kan
								bidra. Koppla till utbildningens innehåll.
							</p>
						</DigiInfoCard>

						<DigiInfoCard
							afHeading="Traineeprogram"
							afHeadingLevel={InfoCardHeadingLevel.H3}
							afType={InfoCardType.TIP}
							afVariation={InfoCardVariation.SECONDARY}
							afSize={InfoCardSize.STANDARD}
							afLinkHref="/about#contact"
							afLinkText="Kartlägg program"
						>
							<p>
								Jämför upplägg (rotation, mentorskap, utbildningstimmar) och datum. Håll koll på
								kvalifikationskrav och ansökningsfönster.
							</p>
						</DigiInfoCard>

						<DigiInfoCard
							afHeading="Portfolio / GitHub"
							afHeadingLevel={InfoCardHeadingLevel.H3}
							afType={InfoCardType.TIP}
							afVariation={InfoCardVariation.SECONDARY}
							afSize={InfoCardSize.STANDARD}
							afLinkHref="/about#contact"
							afLinkText="Få feedback"
						>
							<p>
								Visa 2-4 projekt med din roll och resultat. Lägg till livesida eller skärmdumpar.
								Kvalitet och tydlighet slår mängd.
							</p>
						</DigiInfoCard>
					</div>
				</DigiLayoutContainer>
			</DigiLayoutContainer>
		</main>
	);
}
