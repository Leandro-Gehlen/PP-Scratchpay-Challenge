import {
  EnumEntityCategory,
  AvailabilityType,
} from "../../domain-layer/entities";
export type IHttpRequest = {
  category: EnumEntityCategory.DENTAL | EnumEntityCategory.VET;
  clinicName?: string;
  stateCode?: string;
  availability?: AvailabilityType;
};
