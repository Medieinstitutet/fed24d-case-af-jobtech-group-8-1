import type { IDescription } from "./IDescription";
import type { IEmployer } from "./IEmployer";
import type { IOccupation } from "./IOccupation";
import type { IWorkplace_address } from "./IWorkplace_address";

export interface IJobAdBrief {
    id: string;
    headline: string;
    application_deadline: string;
    // employment_type: 
    employer: IEmployer;
    occupation: IOccupation;
    workplace_address: IWorkplace_address;
    publication_date: string;
}

export interface IJobAdDetailed extends IJobAdBrief {
    logo_url: string;
    description: IDescription;
    // salary_type: 
    salary_description: string;
    // duration: 
    // scope_of_work: 
}