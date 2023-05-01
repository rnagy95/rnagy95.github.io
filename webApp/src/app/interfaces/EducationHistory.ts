export enum DegreeType {
    GCoE = 1,
    BA = 2,
    BSc = 3,
    MA = 4,
    MSc = 5,
    MBA = 6,
    PhD = 7
}

export interface Education {
    school: string,
    schoolLogo: string,
    degreeType: DegreeType,
    fieldOfStudy: string,
    startDateString: string,
    endDateString?: string,
    startDate?: Date,
    endDate?: Date
}