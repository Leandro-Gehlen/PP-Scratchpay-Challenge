export type DentalEntity = {
  category: EnumEntityCategory;
  name?: string;
  stateName?: string;
  availability?: AvailabilityType;
};

export type VetEntity = {
  category: EnumEntityCategory;
  clinicName?: string;
  stateCode?: string;
  opening?: OpeningType;
};

export type AvailabilityType = {
  from: string;
  to: string;
};

export type OpeningType = {
  from: string;
  to: string;
};

export enum EnumEntityCategory {
  "DENTAL" = "dental",
  "VET" = "vet",
}
