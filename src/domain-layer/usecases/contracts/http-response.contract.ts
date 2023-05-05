import { DentalEntity } from "@/domain-layer/entities";

export type HttpResponseType = {
  statusCode: number;
  data: Array<DentalEntity>;
};
