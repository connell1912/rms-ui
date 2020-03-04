export default interface IBuilding {
    id?: number,
    name: string,
    abbrName: string,
    physicalAddress: string,
    trainingLead: number | string,
    amenities: string,
    rooms: string
    // resourceMetadata: Object
}