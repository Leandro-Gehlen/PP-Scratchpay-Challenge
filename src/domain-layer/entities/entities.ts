export type DentalEntity = {
  category: EnumEntityCategory.DENTAL;
  name?: string;
  stateName?: string;
  availability?: AvailabilityType;
  opening?: OpeningType;
};

export type VetEntity = {
  category: EnumEntityCategory;
  clinicName?: string;
  stateCode?: string;
  opening?: OpeningType;
  availability?: AvailabilityType;
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
