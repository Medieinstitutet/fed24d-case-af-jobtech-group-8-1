import { ErrorPageStatusCodes } from "@digi/arbetsformedlingen";
import { DigiLinkInternal, DigiNotificationErrorPage } from "@digi/arbetsformedlingen-react";

export const Error = () => {
	return (
		<>
			<DigiNotificationErrorPage afHttpStatusCode={ErrorPageStatusCodes.NOT_FOUND}>
				<ul slot="links">
					<li>
						<DigiLinkInternal afHref="javascript:void(0)" onClick={() => window.history.back()}>
							Till föregående sida
						</DigiLinkInternal>
					</li>
					<li>
						<DigiLinkInternal afHref="/">Till startsidan</DigiLinkInternal>
					</li>
				</ul>
			</DigiNotificationErrorPage>
		</>
	);
};
