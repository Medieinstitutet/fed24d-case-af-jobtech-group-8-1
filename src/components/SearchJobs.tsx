import { FormInputSearchVariation, FormInputType } from "@digi/arbetsformedlingen";
import { DigiFormInputSearch, DigiNavigationPagination } from "@digi/arbetsformedlingen-react";
import { useState, useEffect } from "react";
import type { IJobAdBrief } from "../models/IJobAd";
import { getJobAds } from "../services/jobAdsService";

export const SearchJobs = () => {

   const [searchInput, setSearchInput] = useState("");
    const [jobAds, setJobAds] = useState<IJobAdBrief[]>([]);
    const [totalPages, setTotalPages] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [page, setPage] = useState(1);
   
    
   
    useEffect(() => {
        const fetchJobAds = async () => {
            try {
                const data = await getJobAds(searchInput, page);
                console.log(data);
                setJobAds(data.hits);
                setTotalPages(Math.ceil(Number(data.total.value) / 10));
                setTotalResults(data.total.value);
            } catch (err) {
                console.error("Something went wrong: ", err);
            }
        };
   
        fetchJobAds();
    }, [page, searchInput]);
   
    console.log(searchInput);
   
    return (
        <>
            <DigiFormInputSearch
                afLabel="Sök efter jobbtitel eller nyckelord"
                afVariation={FormInputSearchVariation.LARGE}
                afType={FormInputType.SEARCH}
                afButtonText="Sök nu"
                afValue={searchInput}
                onAfOnChange={(e) => setSearchInput(String((e.target as HTMLDigiFormInputElement).value))}
            ></DigiFormInputSearch>
   
            <section>
                <h2>Sökresultat:</h2>
                <ul>
                    {jobAds.map((job) => (
                        <article key={job.id}>
                            <h3>{job.headline}</h3>
                            <p>{job.employer.name}</p>
                            <p>Publicerad: {job.publication_date}</p>
                        </article>
                    ))}
                </ul>
            </section>
            <DigiNavigationPagination 
                afTotalPages={totalPages}
                afInitActivePage={1}
                afResultName="jobbannonser"
                afCurrentResultStart={1}
                afCurrentResultEnd={10}
                afTotalResults={totalResults}
                // onAfOnPageChange={}
            >
            </DigiNavigationPagination>
        </>
    );
}