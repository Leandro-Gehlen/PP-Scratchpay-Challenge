export type DentalEntity = {
  category: EnumEntityCategory.DENTAL;
  name?: string;
  stateName?: string;
  availability?: AvailabilityType;
};

export type VetEntity = {
  category: EnumEntityCategory;
  clinicName?: string;
  stateCode?: string;
  availability?: AvailabilityType;
};

export type AvailabilityType = {
  from: string;
  to: string;
};

export enum EnumEntityCategory {
  "DENTAL" = "dental",
  "VET" = "vet",
}
