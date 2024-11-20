import { host } from "../globalRoutes";

export const getPFRoute = `${host}/eis/api/profile/`;

export const getPersonalInfoRoute = `${host}/eis/api/get_personal_info/`;
export const updatePersonalInfoRoute = `${host}/eis/api/update_personal_info/`;

export const getConsymRoute = `${host}/eis/api/consym/pf_no/`;
export const insertConsymRoute = `${host}/eis/api/consym/`;
export const updateConsymRoute = `${host}/eis/api/consym/edit`;
export const deleteConsymRoute = `${host}/eis/api/emp_consymDelete/`;

export const getEventRoute = `${host}/eis/api/event/pf_no/`;
export const insertEventRoute = `${host}/eis/api/event/",`;
export const updateEventRoute = `${host}/eis/api/event/edit`;
export const deleteEventRoute = `${host}/eis/api/emp_event_organizedDelete/`;

export const getBooksRoute = `${host}/eis/api/books/pf_no/`;
export const insertBooksRoute = `${host}/eis/api/book/`;
export const updateBooksRoute = `${host}/eis/api/books/edit`;
export const deleteBooksRoute = `${host}/eis/api/emp_published_booksDelete/`;

export const getConsultancyProjectRoute = `${host}/eis/api/consultancy_projects/pf_no/`;
export const insertConsultancyProjectRoute = `${host}/eis/api/consult_insert/`;
export const deleteConsultancyProjectRoute = `${host}/eis/api/emp_consultancy_projectsDelete/`;

export const getFVisitsRoute = `${host}/eis/api/fvisits/pf_no/`;
export const insertFVisitsRoute = `${host}/eis/api/fvisit/`;
export const deleteFVisitsRoute = `${host}/eis/api/emp_visitsDelete/`;

export const getIVisitsRoute = `${host}/eis/api/ivisits/pf_no/`;
export const insertIVisitsRoute = `${host}/eis/api/ivisit/`;
export const deleteIVisitsRoute = `${host}/eis/api/emp_visitsDelete/`;

export const getJournalRoute = `${host}/eis/api/journal/pf_no/`;
export const insertJournalRoute = `${host}/eis/api/journal/`;
export const updateJournalRoute = `${host}/eis/api/journal/edit`;
// export const deleteJournalRoute = `${host}/eis/api/journal/pf_no/`;

export const getPatentsRoute = `${host}/eis/api/patents/pf_no/`;
export const insertPatentsRoute = `${host}/eis/api/patent_insert/`;
export const deletePatentsRoute = `${host}/eis/api/emp_patentsDelete/`;

export const getPGThesisRoute = `${host}/eis/api/pg_thesis/pf_no/`;
export const insertPGThesisRoute = `${host}/eis/api/pg/`;
export const deletePGThesisRoute = `${host}/eis/api/emp_mtechphd_thesisDelete/`;

export const getPhDThesisRoute = `${host}/eis/api/phd_thesis/pf_no/`;
export const insertPhDThesisRoute = `${host}/eis/api/phd/`;

export const getResearchProjectsRoute = `${host}/eis/api/projects/pf_no/`;
export const insertResearchProjectsRoute = `${host}/eis/api/project/`;
export const deleteResearchProjectsRoute = `${host}/eis/api/emp_research_projectsDelete/`;

export const getAwardsRoute = `${host}/eis/api/award/pf_no/`;
export const insertAwardRoute = `${host}/eis/api/award/`;
export const deleteAchievementRoute = `${host}/eis/api/achv/`;

export const getTalkRoute = `${host}/eis/api/talk/pf_no/`;
export const insertTalkRoute = `${host}/eis/api/talk/`;
export const deleteTalkRoute = `${host}/eis/api/emp_expert_lecturesDelete/`;

export const getConferenceRoute = `${host}/eis/api/fetch_conference/`;
export const insertConferenceRoute = `${host}/eis/api/conference/`;
export const updateConferenceRoute = `${host}/eis/api/conference/edit`;
export const deleteConferenceRoute = `${host}/eis/api/emp_confrence_organisedDelete/`;
