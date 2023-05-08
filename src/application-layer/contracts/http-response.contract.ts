import { DentalEntity, VetEntity } from "@/domain-layer/entities";

export type IHttpResponse = {
  statusCode: number;
  message?: string;
  data?: Array<DentalEntity> | Array<VetEntity>;
};
