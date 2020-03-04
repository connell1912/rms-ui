export enum amenityTypeEnum {
  COFFEE,
  TEA,
  WATER,
  UTENSILS,
  COFFEE_FILTERS,
  COFFEE_CREAMER,
  PAPER_TOWELS,
  CLEANING_WIPES,
  WHITEBOARD_MARKERS,
  WHITEBOARD_ERASERS
}

export enum amenityStatusEnum {
  OK,
  LOW,
  OUT
}

export interface IAmenity {
  id: number;
  amenityType: any;
  amenityStatus: any;
}
