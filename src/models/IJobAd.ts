import type { IApplicationDetails } from "./IApplicationDetails";
import type { IDescription } from "./IDescription";
import type { IDuration } from "./IDuration";
import type { IEmployer } from "./IEmployer";
import type { IEmploymentType } from "./IEmploymentType";
import type { IOccupation } from "./IOccupation";
import type { IWorkingHours } from "./IWorkingHours";
import type { IWorkplace_address } from "./IWorkplace_address";

export interface IJobAdBrief {
	id: string;
	headline: string;
	application_deadline: string;
	employment_type: IEmploymentType;
	employer: IEmployer;
	occupation: IOccupation;
	workplace_address: IWorkplace_address;
	publication_date: string;
}

export interface IJobAdDetailed extends IJobAdBrief {
	logo_url: string | null;
	number_of_vacancies: number;
	description: IDescription;
	// salary_type:
	salary_description: string;
	working_hours_type: IWorkingHours;
	duration: IDuration;
	// scope_of_work:
	application_details?: IApplicationDetails;
	source_type: string;
}
