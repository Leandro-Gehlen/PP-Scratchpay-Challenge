export type DentalEntity = {
  name: string;
  stateName: string;
  availability: AvailabilityType;
};

export type AvailabilityType = {
  from: string;
  to: string;
};

export type VetEntity = {
  clinicName: string;
  stateCode: string;
  opening: OpeningType;
};

export type OpeningType = {
  from: string;
  to: string;
};
