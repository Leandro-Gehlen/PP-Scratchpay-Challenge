import {
  EnumEntityCategory,
  OpeningType,
  AvailabilityType,
} from "@/domain-layer/entities";
export type IHttpRequest = {
  category: EnumEntityCategory;
  clinicName?: string;
  stateCode?: string;
  opening?: OpeningType;
  availability?: AvailabilityType;
};
