export type DentalEntity = {
  category: EnumEntityCategory.DENTAL;
  name?: string;
  stateName?: string;
  availability?: AvailabilityType;
};

export type VetEntity = {
  id: number;
  category: EnumEntityCategory;
  clinicName?: string;
  state?: string;
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
