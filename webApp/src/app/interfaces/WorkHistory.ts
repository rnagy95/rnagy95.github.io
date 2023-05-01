export enum EmploymentType {
    fullTime = 1,
    partTime = 2,
    contingent = 3,
    selfEmployed = 4,
    apprenticeship = 5,
    internship = 6,
    volunteership = 7
}

export interface Position {
    title: string,
    employmentType: EmploymentType,
    startDateString: string,
    endDateString?: string,
    description?: string,
    startDate?:Date,
    endDate?:Date
}

export interface WorkPlace {
    company: string,
    companyLogo: string,
    positions: Position[]
}