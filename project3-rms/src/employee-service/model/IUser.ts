export enum rolesEnum {
    TRNG_MNGR,
    BLDG_MNGR,
    TRAINER,
    ADMIN
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
    roles?: rolesEnum,
    department?: departments
}