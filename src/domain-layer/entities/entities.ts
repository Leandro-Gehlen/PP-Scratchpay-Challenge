export type DentalEntity = {
  category: EnumEntityCategory.DENTAL;
  name?: string;
  stateName?: string;
  availability?: AvailabilityType;
};

export type VetEntity = {
  category: EnumEntityCategory.VET;
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
