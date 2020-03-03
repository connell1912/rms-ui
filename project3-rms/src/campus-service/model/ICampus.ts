export interface ICampus{
    campusId: number,
    name: string,
    abbrName: string,
    shipAddress: string,
    trainingManagerId: number,
    stagingManagerId: number,
    hrLead: number,
    buildings: string,
    corporateEmployees: number[],
    // resourceMetaData:object
}
