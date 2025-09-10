import {
    DigiFooter,
    DigiFooterCard,
    DigiLogo,
    DigiLinkInternal,
  } from "@digi/arbetsformedlingen-react";
  
  import {
    FooterVariation,
    FooterCardVariation,
    LogoVariation,
    LogoColor,
  } from "@digi/arbetsformedlingen";
  

  export default function AppFooter() {
    return (
<DigiFooter afVariation={FooterVariation.LARGE}>
  <div slot="content-top">
    <div>
      <DigiFooterCard afType={FooterCardVariation.ICON}>
        <ul>
          <li>
            <a href="#">
              Sök jobb
            </a>
          </li>
          <li>
            <a href="#">
              Praktik & LIA
            </a>
          </li>
          <li>
            <a href="#">
              Traineeprogram
            </a>
          </li>
          <li>
            <a href="#">
              Karriärguide
            </a>
          </li>
        </ul>
      </DigiFooterCard>
	  </div>
    <div>
      <DigiFooterCard>
        <ul>
          <li>
            <a href="#">Publicera annons</a>
          </li>
          <li>
            <a href="#">Arbetsgivarinloggning</a>
          </li>
          <li>
            <a href="#">Rekryteringslösningar</a>
        </li>
          <li>
            <a href="#">Vanliga frågor (FAQ)</a>
          </li>
        </ul>
      </DigiFooterCard>
    </div>
    <div>
      <DigiFooterCard afType={FooterCardVariation.ICON}>
        <h2>Kontakta oss</h2>
        <p>
        Maila hello@nextstep.se
        eller fyll i formuläret, vi svarar vardagar 09-16.</p>
      </DigiFooterCard>
    </div>
    <div>
      <DigiFooterCard afType={FooterCardVariation.BORDER}>
        <a href="#">Om NextStep</a>
        <p>Vi gör det enkelt att hitta första jobbet, praktik och traineeplatser.</p>
      </DigiFooterCard>
      <DigiFooterCard afType={FooterCardVariation.BORDER}>
        <a href="#">Jobba hos oss</a>
        <p>Gillar du tempo och impact? Se våra lediga roller och väx med oss.</p>
      </DigiFooterCard>
      <DigiFooterCard afType={FooterCardVariation.BORDER}>
        <a href="#">Användarvillkor</a>
        <p>Genom att använda NextStep godkänner du våra villkor - läs dem för regler kring konto, innehåll och integritet.</p>
      </DigiFooterCard>
    </div>
  </div>
  <div slot="content-bottom-left">
  <div slot="content-bottom-left">
  <DigiLinkInternal afHref="/" afVariation="small" aria-label="Till startsidan">
    <DigiLogo afVariation={LogoVariation.LARGE} afColor={LogoColor.SECONDARY} />
  </DigiLinkInternal>
</div>

	</div>
	<div slot="content-bottom-right">
		<p>Följ oss på</p>
		<a href="#">LinkedIn</a>
		<a href="#">Instagram</a>
		<a href="#">YouTube</a>
		<a href="#">TikTok</a>
	</div>
</DigiFooter>
  ); 
}
