export enum roles {
    TRNG_MNGR,
    BLDG_MNGR,
    TRAINER,
    LOCKED
}

export enum departments {
    TRAINING,
    STAGING,
    QC,
    RETENTION,
    HR
}

export enum titles {
    TRAINER,
    COTRAINER,
    TRNG_MNGR,
    STNG_MNGR,
    HR_LEAD,
    CORPORATE_EMP,
    TRNG_LEAD
}

export default interface IUser {
    userId?: number,
    firstName: string,
    lastName: string,
    email: string,
    title?: titles,
    password: string,
    employeeId?: number,
    roles?: roles
    department?: departments
}