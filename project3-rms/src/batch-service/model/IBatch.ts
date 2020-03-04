export enum curriculumEnum {
    JAVA_MSA = "JAVA_MSA",
    CSHARP = "CSHARP",
    PEGA = "PEGA",
    JTA = "JTA",
    REACT = "REACT",
    AI = "AI",
    MOBILE = "MOBILE"
}

export default interface IBatch {
    batchId?: number,
    batchName: string,
    startDate: Date,
    endDate: Date,
    trainerId?: number,
    coTrainerId?: number,
    associates?: any,
    curriculum?: any,
    resourceMetaData?: any
}