export enum curriculumEnum {
    JAVA_MSA,
    CSHARP,
    PEGA,
    JTA,
    REACT,
    AI,
    MOBILE
}

export default interface IBatch {
    batchId?: number,
    batchName: string,
    startDate: Date,
    endDate: Date,
    trainerId?: number,
    coTrainerId?: number,
    associates?: [],
    curriculum?: curriculumEnum,
    resourceMetaData?: any
}